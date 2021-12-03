import nconf from 'nconf';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import PlayerModel, { IPlayerDocument, PlayerMedalModel, IPlayerMedalDocument } from '../models/player.model';

function getToken(config: nconf.Provider, data: Object): string {
  const secret = config.get('secret');
  const jwtExpiration = config.get('jwt:expiration');

  return jwt.sign(data, secret, {
    expiresIn: jwtExpiration,
  });
}

export const signUpAndLogin = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { body } = req;
  const { tokens } = body;
  const keys = config.get('google_auth');

  try {
    const oAuth2Client = new OAuth2Client(keys.client_id, keys.client_secret);
    oAuth2Client.setCredentials(tokens);

    const url = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos';
    const googleResponse = await oAuth2Client.request({ url });
    const { data }: { data: any } = googleResponse;
    console.log(data);

    const fullname = data.names[0].unstructuredName;
    const photo = data.photos[0].url;
    const email = data.emailAddresses[0].value;

    let player: IPlayerDocument;
    const playerWithSameEmail: IPlayerDocument | null = await PlayerModel.findOne({ 'user.email': email }).exec();
    if (!playerWithSameEmail) {
      const emailParts = email.split('@');
      const name = emailParts[0];
      const newPlayer: IPlayerDocument = new PlayerModel({
        name,
        user: {
          fullname,
          username: name,
          email,
          photo,
        },
        points: Math.floor(Math.random() * 1000),
      });
      await newPlayer.save();
      player = newPlayer;
    } else {
      player = playerWithSameEmail;
    }

    let medalsData;
    const playerMedalsDocs: Array<IPlayerMedalDocument> = await PlayerMedalModel.find({
      player: player._id,
    }).exec();

    if (playerMedalsDocs) {
      medalsData = playerMedalsDocs.map((e) => {
        return {
          name: e.name,
          target_points: e.target_points,
          points: e.points,
          material: e.material,
          is_granted: e.is_granted,
        };
      });
    }

    const token = getToken(config, { playerId: player._id });

    const playerData = {
      id: player._id,
      name: player.name,
      user: player.user,
      month_points: player.month_points,
      points: player.points,
      coins: player.coins,
      medals: medalsData,
    };

    res.append('x-access-token', token);
    return res.status(201).json({ message: 'session created', player: playerData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};

export const profile = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { playerId } = res.locals.jwtPayload;

  try {
    let playerData;
    const player: IPlayerDocument | null = await PlayerModel.findById(playerId).exec();
    if (player) {
      playerData = {
        id: player._id,
        name: player.name,
        user: player.user,
        month_points: player.month_points,
        points: player.points,
        coins: player.coins,
      };
    }

    let medalsData;
    const playerMedalsDocs: Array<IPlayerMedalDocument> = await PlayerMedalModel.find({
      player: playerId,
    }).exec();

    if (playerMedalsDocs) {
      medalsData = playerMedalsDocs.map((e) => {
        return {
          name: e.name,
          target_points: e.target_points,
          points: e.points,
          material: e.material,
          is_granted: e.is_granted,
        };
      });
    }

    const responseData = {
      ...playerData,
      medals: medalsData,
    };

    return res.status(201).json({ data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};

export const ranking = (config: nconf.Provider) => async (req: Request, res: Response) => {
  try {
    const playerRanking1Docs: Array<IPlayerDocument> = await PlayerModel.find(
      { name: { $nin: ['GodPlayer1', 'GodPlayer2'] } },
      { _id: 0, name: 1, 'user.fullname': 1, points: 1 },
    )
      .sort({
        points: -1,
      })
      .limit(20)
      .exec();

    const playerRanking2Docs: Array<IPlayerDocument> = await PlayerModel.find(
      { name: { $nin: ['GodPlayer1', 'GodPlayer2'] } },
      { _id: 0, name: 1, 'user.fullname': 1, month_points: 1 },
    )
      .sort({
        points: -1,
      })
      .limit(20)
      .exec();

    const responseData = {
      ranking: playerRanking1Docs,
      ranking_monthly: playerRanking2Docs,
    };

    return res.status(201).json({ data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};
