import { v4 as uuidv4 } from "uuid";
import { Schema, Document, Model, model } from "mongoose";
import { IMedalDocument } from "./medal.model";

export interface IUserSubDocument extends Document {
    fullname: string;
    username: string;
    email: string;
    photo: string;
}

export interface IPlayerMedalSubDocument extends Document {
    medal: IMedalDocument["_id"];
    points: number;
    is_granted: boolean;
}

export interface IPlayerDocument extends Document {
    _id: string;
    name: string;
    user: IUserSubDocument;
    month_points: number;
    points: number;
    coins: number;
    medals: IPlayerMedalSubDocument;
}

export interface IPlayerModel extends Model<IPlayerDocument> { }

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
    },
    photo: {
        type: String,
        required: false,
    }
});

const playerMedalSchema = new Schema({
    medal: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    is_granted: {
        type: Boolean,
        required: true,
        default: false
    }
}
);

const schema: Schema = new Schema({
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
    medals: [{
        type: playerMedalSchema,
        required: false,
    }]
},
    { timestamps: true }
);

const PlayerModel: IPlayerModel = model<IPlayerDocument, IPlayerModel>(
    "player",
    schema,
    "players",
    true
);

export default PlayerModel;