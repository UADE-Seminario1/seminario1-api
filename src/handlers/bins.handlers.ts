import nconf from 'nconf';
import { Request, Response } from 'express';
import PlayerModel, { IPlayerDocument, PlayerMedalModel, IPlayerMedalDocument } from '../models/player.model';
import MedalModel, { IMedalDocument } from '../models/medal.model';

function getPlayerById(id: string): Promise<IPlayerDocument | null> {
  return PlayerModel.findById(id).exec();
}

async function registerPoints(player: IPlayerDocument, points: number, material?: string): Promise<any> {
  const playerId = player._id;

  const genericMedalsDocs: Array<IMedalDocument> = await MedalModel.find({
    material: 'generic',
    medals_required: { $size: 0 },
  }).exec();

  let materialMedalsDocs: Array<IMedalDocument> = [];
  if (material) {
    materialMedalsDocs = await MedalModel.find({ material, medals_required: { $size: 0 } }).exec();
  }

  let coins: number = 0;
  for (let medal of genericMedalsDocs.concat(materialMedalsDocs)) {
    const playerMedalDoc: IPlayerMedalDocument | null = await PlayerMedalModel.findOne({
      player: playerId,
      medal: medal._id,
    }).exec();

    if (playerMedalDoc) {
      console.log('el player tiene la medalla');
      if (!playerMedalDoc.is_granted) {
        const is_granted = playerMedalDoc.points + points >= medal.target_points;
        await PlayerMedalModel.updateOne({ _id: playerMedalDoc }, { $inc: { points }, is_granted }).exec();
        console.log('concedida', is_granted);
        if (is_granted) {
          coins += medal.coins_reward;
          console.log('monedas concedidas', medal.coins_reward);
        }
      }
    } else {
      console.log('el player no tiene la medalla');
      const newPlayerMedal: IPlayerMedalDocument = new PlayerMedalModel({
        player: player._id,
        medal: medal._id,
        points,
        is_granted: false,
        name: medal.name,
        target_points: medal.target_points,
        material: medal.material,
      });
      await newPlayerMedal.save();
    }
  }

  await PlayerModel.updateOne({ _id: playerId }, { $inc: { month_points: points, points, coins } }).exec();
}

export const endBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  // const { params } = req;
  // const { connectionId } = params;

  try {
    const playerId = 'b4293250-482d-408f-92a4-1fe63088ef83';
    const player: IPlayerDocument | null = await getPlayerById(playerId);
    if (player) {
      registerPoints(player, 10, 'glass');
    }
    return res.status(200).json({ message: 'points granted' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};
