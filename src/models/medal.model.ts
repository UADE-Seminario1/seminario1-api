import { v4 as uuidv4 } from "uuid";
import { Schema, Document, Model, model } from "mongoose";

export interface IMedalDocument extends Document {
    _id: string;
    name: string;
    description: string;
    target_points: number;
    material: string;
    coins_reward: number;
    medals_required: Array<string>;
}

export interface IMedalModel extends Model<IMedalDocument> { }

const schema = new Schema({
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
    description: {
        type: String,
        required: true,
    },
    target_points: {
        type: Number,
        required: true,
        default: 20
    },
    material: {
        type: String,
        required: true,
    },
    coins_reward: {
        type: Number,
        required: true,
        default: 1
    },
    medals_required: [{
        type: String,
        required: false,
        default: []
    }],
},
    { timestamps: true }
);

const MedalModel: IMedalModel = model<IMedalDocument, IMedalModel>(
    "medal",
    schema,
    "medals",
    true
);

export default MedalModel;