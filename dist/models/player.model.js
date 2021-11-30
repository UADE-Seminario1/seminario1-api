"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMedalModel = void 0;
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
        unique: true,
        index: true,
    },
    photo: {
        type: String,
        required: false,
    },
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
}, { timestamps: true });
var PlayerModel = (0, mongoose_1.model)('player', schema, 'players', true);
var playerMedalSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
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
exports.PlayerMedalModel = (0, mongoose_1.model)('player_medal', playerMedalSchema, 'player_medals', true);
exports.default = PlayerModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wbGF5ZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQW9DO0FBQ3BDLHFDQUEwRDtBQW1CMUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQzVCLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztLQUNoQjtDQUNGLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFXLElBQUksaUJBQU0sQ0FDL0I7SUFDRSxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxTQUFNO0tBQ2hCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLFVBQVU7UUFDaEIsUUFBUSxFQUFFLElBQUk7UUFDZCxHQUFHLEVBQUUsS0FBSztLQUNYO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYO0NBQ0YsRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDckIsQ0FBQztBQUlGLElBQU0sV0FBVyxHQUFpQixJQUFBLGdCQUFLLEVBQWdDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBWTFHLElBQU0saUJBQWlCLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ25DLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLFNBQU07S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEtBQUs7S0FDZjtDQUNGLENBQUMsQ0FBQztBQUlVLFFBQUEsZ0JBQWdCLEdBQXNCLElBQUEsZ0JBQUssRUFDdEQsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsSUFBSSxDQUNMLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMifQ==