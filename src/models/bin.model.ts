import { v4 as uuidv4 } from "uuid";
import { Schema, Document, Model, model } from "mongoose";
import { IPlayerDocument } from "./player.model"

export interface IBinDocument extends Document {
    _id: string;
    name: string;
    connection_code: string;
}

export interface IBinModel extends Model<IBinDocument> { }

const bin_schema = new Schema({
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
    connection_code: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
},
    { timestamps: true }
);

const BinModel: IBinModel = model<IBinDocument, IBinModel>(
    "bin",
    bin_schema,
    "bins",
    true
);

export interface IBinConnectionDocument extends Document {
    _id: string;
    bin: IBinDocument["_id"];
    player: IPlayerDocument["_id"];
}

export interface IBinConnectionModel extends Model<IBinConnectionDocument> { }

const bin_connection_schema = new Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    bin: {
        type: String,
        required: true,
    },
    player: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

export const BinConnection: IBinConnectionModel = model<IBinConnectionDocument, IBinConnectionModel>(
    "bin_connection",
    bin_connection_schema,
    "bin_connections",
    true
);

export default BinModel;