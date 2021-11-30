import mongoose, { ConnectOptions } from 'mongoose';
import bluebird from 'bluebird';
import getConfig from '../utils/config';
import PlayerModel from '../models/player.model';
import MedalModel, { IMedalDocument } from '../models/medal.model';
import RecycledFlowModel from '../models/recycled_flow.model';
import BinModel from '../models/bin.model';

mongoose.Promise = bluebird;

const config = getConfig();

const mongoUrl = config.get('mongodb:url');
const mongoOpts: ConnectOptions = config.get('mongodb:options');

const loadData = async () => {
  console.log('Loading data into the database...');

  const findOneAndUpdateOptions = { upsert: true /*, overwrite: true*/ };
  await PlayerModel.findOneAndUpdate(
    { name: 'GodPlayer1' },
    {
      name: 'GodPlayer1',
      user: {
        fullname: 'Administrator 1',
        username: 'admin1',
        email: 'admin1@gmail.com',
      },
    },
    findOneAndUpdateOptions,
  ).exec();

  await PlayerModel.findOneAndUpdate(
    { name: 'GodPlayer2' },
    {
      name: 'GodPlayer2',
      user: {
        fullname: 'Administrator 2',
        username: 'admin2',
        email: 'admin2@gmail.com',
      },
    },
    findOneAndUpdateOptions,
  ).exec();

  await MedalModel.findOneAndUpdate(
    { name: 'Subteniente Plastico' },
    {
      name: 'Subteniente Plastico',
      description: 'Alcanza la meta reciclando más plástico',
      target_points: 100,
      material: 'plastic',
      coins_reward: 5,
    },
    findOneAndUpdateOptions,
  ).exec();

  await MedalModel.findOneAndUpdate(
    { name: 'Coronel Metal' },
    {
      name: 'Coronel Metal',
      description: 'Alcanza la meta reciclando más metal',
      target_points: 50,
      material: 'metal',
      coins_reward: 9,
    },
    findOneAndUpdateOptions,
  ).exec();

  await MedalModel.findOneAndUpdate(
    { name: 'General Vidrio' },
    {
      name: 'General Vidrio',
      description: 'Alcanza la meta reciclando más vidrio',
      target_points: 80,
      material: 'glass',
      coins_reward: 12,
    },
    findOneAndUpdateOptions,
  ).exec();

  await MedalModel.findOneAndUpdate(
    { name: 'Oficial Carton' },
    {
      name: 'Oficial Carton',
      description: 'Alcanza la meta reciclando más carton',
      target_points: 50,
      material: 'cardboard',
      coins_reward: 4,
    },
    findOneAndUpdateOptions,
  ).exec();

  const medalNovato: IMedalDocument | null = await MedalModel.findOneAndUpdate(
    { name: 'Reciclador Novato' },
    {
      name: 'Reciclador Novato',
      description: 'Alcanza la meta por reciclar',
      target_points: 100,
      material: 'generic',
      coins_reward: 4,
    },
    findOneAndUpdateOptions,
  ).exec();

  const medalAsiduo: IMedalDocument | null = await MedalModel.findOneAndUpdate(
    { name: 'Reciclador Asiduo' },
    {
      name: 'Reciclador Asiduo',
      description: 'Alcanza la meta por continuar reciclando',
      target_points: 400,
      material: 'generic',
      coins_reward: 8,
      medals_required: [medalNovato!._id],
    },
    findOneAndUpdateOptions,
  ).exec();

  const medalEstrella: IMedalDocument | null = await MedalModel.findOneAndUpdate(
    { name: 'Reciclador Estrella' },
    {
      name: 'Reciclador Estrella',
      description: 'Alcanza la meta por continuar reciclando',
      target_points: 1000,
      material: 'generic',
      coins_reward: 12,
      medals_required: [medalAsiduo!._id],
    },
    findOneAndUpdateOptions,
  ).exec();

  await MedalModel.findOneAndUpdate(
    { name: 'Reciclador Visionario 1' },
    {
      name: 'Reciclador Visionario 1',
      description: 'Alcanza la meta por continuar reciclando',
      target_points: 2000,
      material: 'generic',
      coins_reward: 24,
      medals_required: [medalEstrella!._id],
    },
    findOneAndUpdateOptions,
  ).exec();

  await RecycledFlowModel.findOneAndUpdate(
    { name: 'Flujo del Vidrio' },
    {
      name: 'Flujo del Vidrio',
      material: 'glass',
      steps: [
        { number: '0', points: 2 },
        { number: '1', points: 1 },
        { number: '2', points: 1 },
        { number: '3', points: 1 },
        { number: '4', points: 1 },
      ],
    },
    findOneAndUpdateOptions,
  ).exec();

  await RecycledFlowModel.findOneAndUpdate(
    { name: 'Flujo del Carton' },
    {
      name: 'Flujo del Carton',
      material: 'cardboard',
      steps: [
        { number: '0', points: 2 },
        { number: '1', points: 1 },
        { number: '2', points: 1 },
        { number: '3', points: 1 },
        { number: '4', points: 1 },
      ],
    },
    findOneAndUpdateOptions,
  ).exec();

  await RecycledFlowModel.findOneAndUpdate(
    { name: 'Flujo del Plastico' },
    {
      name: 'Flujo del Plastico',
      material: 'plastic',
      steps: [
        { number: '0', points: 2 },
        { number: '1', points: 1 },
        { number: '2', points: 1 },
        { number: '3', points: 1 },
        { number: '4', points: 1 },
      ],
    },
    findOneAndUpdateOptions,
  ).exec();

  await RecycledFlowModel.findOneAndUpdate(
    { name: 'Flujo del Papel' },
    {
      name: 'Flujo del Papel',
      material: 'paper',
      steps: [
        { number: '0', points: 2 },
        { number: '1', points: 1 },
        { number: '2', points: 1 },
        { number: '3', points: 1 },
        { number: '4', points: 1 },
      ],
    },
    findOneAndUpdateOptions,
  ).exec();

  await RecycledFlowModel.findOneAndUpdate(
    { name: 'Flujo del Metal' },
    {
      name: 'Flujo del Metal',
      material: 'metal',
      steps: [
        { number: '0', points: 2 },
        { number: '1', points: 1 },
        { number: '2', points: 1 },
        { number: '3', points: 1 },
        { number: '4', points: 1 },
      ],
    },
    findOneAndUpdateOptions,
  ).exec();

  await BinModel.findOneAndUpdate(
    { name: 'cesto inteligente prototipo 1' },
    {
      name: 'cesto inteligente prototipo 1',
      connection_code: '123',
    },
    findOneAndUpdateOptions,
  ).exec();

  console.log('Data was loaded in the database');
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
