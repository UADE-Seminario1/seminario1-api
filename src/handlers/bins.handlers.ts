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
  if (material || material == 'unknown') {
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

    return res.status(200).json({ message: 'bin-connection requested', data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};

export const getRequestedBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { params } = req;
  const { binId } = params;
  try {
    const binConnection: IBinConnectionDocument | null = await BinConnectionModel.findOne(
      { bin: binId, state: 'requested' },
      {},
      { sort: { createdAt: -1 } },
    ).exec();

    if (!binConnection) {
      return res.status(404).json({ message: 'recent requested bin-connection not found' });
    }

    const responseData = {
      id: binConnection._id,
      player_id: binConnection.player,
      flow_points: binConnection.flow_points,
      points: binConnection.points,
      material: binConnection.material,
      initial_weight: binConnection.initial_weight,
      final_weight: binConnection.final_weight,
      state: binConnection.state,
      created_at: binConnection.createdAt,
      updated_at: binConnection.updatedAt,
    };

    return res.status(200).json({ data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};

export const checkRequestedBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { params } = req;
  const { binId } = params;

  try {
    const binConnection: IBinConnectionDocument | null = await BinConnectionModel.findOne(
      { bin: binId, state: 'requested' },
      {},
      { sort: { createdAt: -1 } },
    ).exec();

    if (!binConnection) {
      return res.status(404).end();
    }

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};

export const checkAcceptedBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { params } = req;
  const { connectionId } = params;

  try {
    const binConnection: IBinConnectionDocument | null = await BinConnectionModel.findOne({
      _id: connectionId,
      state: 'accepted',
    }).exec();

    if (!binConnection) {
      return res.status(404).end();
    }

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};

export const acceptBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { params, body } = req;
  const { connectionId } = params;
  const { initial_weight } = body;

  try {
    const binConnection: IBinConnectionDocument | null = await BinConnectionModel.findOneAndUpdate(
      { _id: connectionId, state: 'requested' },
      {
        initial_weight,
        state: 'accepted',
      },
      { returnDocument: 'after' },
    ).exec();

    if (!binConnection) {
      return res.status(404).json({ message: 'bin-connection not found' });
    }

    const responseData = {
      id: binConnection._id,
      player_id: binConnection.player,
      flow_points: binConnection.flow_points,
      points: binConnection.points,
      material: binConnection.material,
      initial_weight: binConnection.initial_weight,
      final_weight: binConnection.final_weight,
      state: binConnection.state,
      created_at: binConnection.createdAt,
      updated_at: binConnection.updatedAt,
    };

    return res.status(200).json({ message: 'bin-connection accepted', data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};

export const endBinConnection = (config: nconf.Provider) => async (req: Request, res: Response) => {
  const { params, body } = req;
  const { connectionId } = params;
  const { final_weight } = body;

  // obtiene de la conexion usuario-tacho:
  // - el player, el material reciclado si el player realizó algún flujo de reciclaje
  // - obtiene los puntos ganados mediante un flujo de reciclaje y el peso registrado de lo reciclado
  // termina la conexión usuario y tacho

  try {
    const binConnection: IBinConnectionDocument | null = await BinConnectionModel.findOne({
      _id: connectionId,
      state: 'accepted',
    });
    if (!binConnection) {
      return res.status(404).json({ message: 'bin-connection not found' });
    }
    const { player: playerId, flow_points, material, initial_weight } = binConnection;
    const deltaWeigth = final_weight - initial_weight;
    // TODO: falta determinar los puntos que se van a otorgar por el peso de los residuos depositados en el tacho
    const points = flow_points;
    console.log(deltaWeigth);

    const player: IPlayerDocument | null = await getPlayerById(playerId);
    let pointsRegisteredResp;
    let responseData;
    let binConnectionUpdated: IBinConnectionDocument | null;
    if (player) {
      pointsRegisteredResp = await registerPoints(player, points, material);
      binConnectionUpdated = await BinConnectionModel.findByIdAndUpdate(
        connectionId,
        {
          points,
          final_weight,
          state: 'ended',
        },
        { returnDocument: 'after' },
      ).exec();

      responseData = {
        id: binConnectionUpdated!._id,
        player_id: binConnectionUpdated!.player,
        flow_points: binConnectionUpdated!.flow_points,
        points: binConnectionUpdated!.points,
        material: binConnectionUpdated!.material,
        initial_weight: binConnectionUpdated!.initial_weight,
        final_weight: binConnectionUpdated!.final_weight,
        state: binConnectionUpdated!.state,
        created_at: binConnectionUpdated!.createdAt,
        updated_at: binConnectionUpdated!.updatedAt,
        ...pointsRegisteredResp,
      };
    }
    return res.status(200).json({ message: 'bin-connection ended', data: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something wrong happened' });
  }
};
