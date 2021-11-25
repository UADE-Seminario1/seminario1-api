"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
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
}, { timestamps: true });
var MedalModel = (0, mongoose_1.model)("medal", schema, "medals", true);
exports.default = MedalModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkYWwubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL21lZGFsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQW9DO0FBQ3BDLHFDQUEwRDtBQWMxRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDdEIsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNsQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxFQUFFO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxlQUFlLEVBQUUsQ0FBQztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLEtBQUs7WUFDZixPQUFPLEVBQUUsRUFBRTtTQUNkLENBQUM7Q0FDTCxFQUNHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUN2QixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQWdCLElBQUEsZ0JBQUssRUFDakMsT0FBTyxFQUNQLE1BQU0sRUFDTixRQUFRLEVBQ1IsSUFBSSxDQUNQLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMifQ==