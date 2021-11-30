import { v4 as uuidv4 } from 'uuid';
import { Schema, Document, Model, model } from 'mongoose';
import { IMedalDocument } from './medal.model';

export interface IUserSubDocument extends Document {
  fullname: string;
  username: string;
  email: string;
  photo?: string;
}

export interface IPlayerDocument extends Document {
  _id: string;
  name: string;
  user: IUserSubDocument;
  month_points: number;
  points: number;
  coins: number;
}

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  photo: {
    type: String,
    required: false,
  },
});

const schema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    name: {
      type: String,
      required: true,
    },
    user: {
      type: userSchema,
      required: true,
      _id: false,
    },
    month_points: {
      type: Number,
      required: false,
      default: 0,
    },
    points: {
      type: Number,
      required: false,
      default: 0,
    },
    coins: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true },
);

export interface IPlayerModel extends Model<IPlayerDocument> {}

const PlayerModel: IPlayerModel = model<IPlayerDocument, IPlayerModel>('player', schema, 'players', true);

export interface IPlayerMedalDocument extends Document {
  player: IPlayerDocument['_id'];
  medal: IMedalDocument['_id'];
  name: string;
  target_points: number;
  points: number;
  material: string;
  is_granted: boolean;
}

const playerMedalSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  player: {
    type: String,
    required: true,
  },
  medal: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  target_points: {
    type: Number,
    required: true,
    default: 20,
  },
  points: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  is_granted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export interface IPlayerMedalModel extends Model<IPlayerMedalDocument> {}

export const PlayerMedalModel: IPlayerMedalModel = model<IPlayerMedalDocument, IPlayerMedalModel>(
  'player_medal',
  playerMedalSchema,
  'player_medals',
  true,
);

export default PlayerModel;
