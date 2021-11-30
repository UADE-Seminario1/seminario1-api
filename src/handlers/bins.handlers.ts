import nconf from 'nconf';
import { Request, Response } from 'express';
import PlayerModel, { IPlayerDocument, PlayerMedalModel, IPlayerMedalDocument } from '../models/player.model';
import MedalModel, { IMedalDocument } from '../models/medal.model';
import BinModel, { IBinDocument, BinConnectionModel, IBinConnectionDocument } from '../models/bin.model';

function getPlayerById(id: string): Promise<IPlayerDocument | null> {
  return PlayerModel.findById(id).exec();
}

async function registerPoints(
  player: IPlayerDocument,
  points: number,
  material?: string,
): Promise<Record<string, any>> {
  const playerId = player._id;

  const genericMedalsDocs: Array<IMedalDocument> = await MedalModel.find({
    material: 'generic',
    medals_required: { $size: 0 },
  }).exec();

  let materialMedalsDocs: Array<IMedalDocument> = [];
  if (material) {
    materialMedalsDocs = await MedalModel.find({ material, medals_required: { $size: 0 } }).exec();
  }

  let medalsGranted: Array<Record<string, any>> = [];
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
          medalsGranted.push({ name: medal.name, coins_reward: medal.coins_reward });
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

  return { points, medalsGranted };
}

export const createBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { body } = req;
  const { connection_code, flow_points, material } = body;
  const { playerId } = res.locals.jwtPayload;

  try {
    const bin: IBinDocument | null = await BinModel.findOne({ connection_code }).exec();
    if (!bin) {
      return res.status(404).json({ message: 'bin not found' });
    }

    const newBinConnection: IBinConnectionDocument = new BinConnectionModel({
      bin: bin._id,
      player: playerId,
      flow_points,
      material,
      state: 'requested',
    });
    await newBinConnection.save();

    const responseData = {
      connection_id: newBinConnection._id,
    };

    return res.status(200).json({ message: 'connection requested', data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};

export const endBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  // const { params } = req;
  // const { connectionId } = params;

  // obtiene de la conexion usuario-tacho:
  // - el player, el material reciclado si el player realizó algún flujo de reciclaje
  // - obtiene los puntos ganados mediante un flujo de reciclaje y el peso registrado de lo reciclado
  // termina la conexión usuario y tacho

  try {
    const playerId = 'b4293250-482d-408f-92a4-1fe63088ef83';
    const player: IPlayerDocument | null = await getPlayerById(playerId);
    let pointsRegisteredResp;
    if (player) {
      pointsRegisteredResp = await registerPoints(player, 10, 'glass');
    }
    return res.status(200).json({ message: 'conexión finalizada', data: pointsRegisteredResp });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};
