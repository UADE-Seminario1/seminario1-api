import mongoose, { ConnectOptions } from 'mongoose';
import bluebird from 'bluebird';
import getConfig from '../utils/config';
import PlayerModel, { IPlayerDocument } from '../models/player.model';
import MedalModel, { IMedalDocument } from '../models/medal.model';
import RecycledFlowModel, { IRecycledFlowDocument } from '../models/recycled_flow.model';

mongoose.Promise = bluebird;

const config = getConfig();

const mongoUrl = config.get('mongodb:url');
const mongoOpts: ConnectOptions = config.get('mongodb:options');

const loadData = async () => {
  const player1: IPlayerDocument = new PlayerModel({
    name: 'GodPlayer1',
    user: {
      fullname: 'Administrator 1',
      username: 'admin1',
      email: 'admin1@gmail.com',
    },
  });
  await player1.save();

  const player2: IPlayerDocument = new PlayerModel({
    name: 'GodPlayer2',
    user: {
      fullname: 'Administrator 2',
      username: 'admin2',
      email: 'admin2@gmail.com',
    },
  });
  await player2.save();

  const medal1: IMedalDocument = new MedalModel({
    name: 'Subteniente Plastico',
    description: 'Alcanza la meta reciclando más plástico',
    target_points: 100,
    material: 'plastic',
    coins_reward: 5,
  });
  await medal1.save();

  const medal2: IMedalDocument = new MedalModel({
    name: 'Coronel Metal',
    description: 'Alcanza la meta reciclando más metal',
    target_points: 50,
    material: 'metal',
    coins_reward: 9,
  });
  await medal2.save();

  const medal3: IMedalDocument = new MedalModel({
    name: 'General Vidrio',
    description: 'Alcanza la meta reciclando más vidrio',
    target_points: 80,
    material: 'glass',
    coins_reward: 12,
  });
  await medal3.save();

  const medal4: IMedalDocument = new MedalModel({
    name: 'Oficial Carton',
    description: 'Alcanza la meta reciclando más carton',
    target_points: 50,
    material: 'cardboard',
    coins_reward: 4,
  });
  await medal4.save();

  const flow1: IRecycledFlowDocument = new RecycledFlowModel({
    name: 'Flujo del Vidrio',
    material: 'glass',
    steps: [
      { number: '0', points: 2 },
      { number: '1', points: 1 },
      { number: '2', points: 1 },
      { number: '3', points: 1 },
      { number: '4', points: 1 },
    ],
  });
  await flow1.save();

  const flow2: IRecycledFlowDocument = new RecycledFlowModel({
    name: 'Flujo del Carton',
    material: 'cardboard',
    steps: [
      { number: '0', points: 2 },
      { number: '1', points: 1 },
      { number: '2', points: 1 },
      { number: '3', points: 1 },
      { number: '4', points: 1 },
    ],
  });
  await flow2.save();

  const flow3: IRecycledFlowDocument = new RecycledFlowModel({
    name: 'Flujo del Plastico',
    material: 'plastic',
    steps: [
      { number: '0', points: 2 },
      { number: '1', points: 1 },
      { number: '2', points: 1 },
      { number: '3', points: 1 },
      { number: '4', points: 1 },
    ],
  });
  await flow3.save();

  const flow4: IRecycledFlowDocument = new RecycledFlowModel({
    name: 'Flujo del Papel',
    material: 'paper',
    steps: [
      { number: '0', points: 2 },
      { number: '1', points: 1 },
      { number: '2', points: 1 },
      { number: '3', points: 1 },
      { number: '4', points: 1 },
    ],
  });
  await flow4.save();

  const flow5: IRecycledFlowDocument = new RecycledFlowModel({
    name: 'Flujo del Metal',
    material: 'metal',
    steps: [
      { number: '0', points: 2 },
      { number: '1', points: 1 },
      { number: '2', points: 1 },
      { number: '3', points: 1 },
      { number: '4', points: 1 },
    ],
  });
  await flow5.save();
};

mongoose
  .connect(mongoUrl, mongoOpts)
  .then(async () => {
    console.log('Connected to the MongoDB database');
    await loadData();
  })
  .catch((e) => {
    console.log('Cannot connect to the MongoDB database');
    console.log(e);
  });
