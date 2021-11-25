"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
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
var playerMedalSchema = new mongoose_1.Schema({
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
});
var schema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
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
}, { timestamps: true });
var PlayerModel = (0, mongoose_1.model)("player", schema, "players", true);
exports.default = PlayerModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wbGF5ZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBb0M7QUFDcEMscUNBQTBEO0FBNEIxRCxJQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDMUIsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztLQUNsQjtDQUNKLENBQUMsQ0FBQztBQUVILElBQU0saUJBQWlCLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ2pDLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0NBQ0osQ0FDQSxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQVcsSUFBSSxpQkFBTSxDQUFDO0lBQzlCLEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLFNBQU07S0FDbEI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxZQUFZLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxNQUFNLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQztDQUNMLEVBQ0csRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3ZCLENBQUM7QUFFRixJQUFNLFdBQVcsR0FBaUIsSUFBQSxnQkFBSyxFQUNuQyxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxJQUFJLENBQ1AsQ0FBQztBQUVGLGtCQUFlLFdBQVcsQ0FBQyJ9