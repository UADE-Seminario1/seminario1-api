import nconf from 'nconf';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import PlayerModel, { IPlayerDocument, PlayerMedalModel, IPlayerMedalDocument } from '../models/player.model';

function getToken(config: nconf.Provider, data: Object): string {
  const secret = config.get('app:secret');
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
