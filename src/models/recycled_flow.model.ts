import { v4 as uuidv4 } from 'uuid';
import { Schema, Document, Model, model } from 'mongoose';
import { IPlayerDocument } from './player.model';

export interface IStepSubDocument extends Document {
  number: string;
  points: number;
}

export interface IRecycledFlowDocument extends Document {
  _id: string;
  name: string;
  material: string;
  steps: Array<IStepSubDocument>;
}

export interface IRecycledFlowModel extends Model<IRecycledFlowDocument> {}

const stepSchema: Schema = new Schema({
  number: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const recycledFlowSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    material: {
      type: String,
      required: true,
    },
    steps: [
      {
        type: stepSchema,
        required: true,
        _id: false,
      },
    ],
  },
  { timestamps: true },
);

const RecycledFlowModel: IRecycledFlowModel = model<IRecycledFlowDocument, IRecycledFlowModel>(
  'recycled_flow',
  recycledFlowSchema,
  'recycled_flows',
  true,
);

export interface IRecycledFlowInstanceDocument extends Document {
  _id: string;
  recycledFlow: IRecycledFlowDocument['_id'];
  player: IPlayerDocument['_id'];
  steps: Array<string>;
  state: string;
}

export interface IRecycledFlowInstanceModel extends Model<IRecycledFlowInstanceDocument> {}

const recycledFlowInstanceSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    recycled_flow: {
      type: String,
      required: true,
    },
    player: {
      type: String,
      required: true,
    },
    steps: [
      {
        type: String,
        required: true,
      },
    ],
    state: {
      type: String,
      enum: ['opened', 'closed'],
    },
  },
  { timestamps: true },
);

const RecycledFlowInstanceModel: IRecycledFlowInstanceModel = model<
  IRecycledFlowInstanceDocument,
  IRecycledFlowInstanceModel
>('recycled_flow_instance', recycledFlowInstanceSchema, 'recycled_flow_instances', true);

export default RecycledFlowModel;
export { RecycledFlowInstanceModel };
