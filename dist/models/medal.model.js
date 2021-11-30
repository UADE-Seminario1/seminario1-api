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
        default: 20,
    },
    material: {
        type: String,
        required: false,
        default: 'generic',
    },
    coins_reward: {
        type: Number,
        required: true,
        default: 1,
    },
    medals_required: [
        {
            type: String,
            required: false,
            default: [],
        },
    ],
}, { timestamps: true });
var MedalModel = (0, mongoose_1.model)('medal', schema, 'medals', true);
exports.default = MedalModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkYWwubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL21lZGFsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQW9DO0FBQ3BDLHFDQUEwRDtBQWMxRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGlCQUFNLENBQ3ZCO0lBQ0UsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNoQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsZUFBZSxFQUFFO1FBQ2Y7WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsT0FBTyxFQUFFLEVBQUU7U0FDWjtLQUNGO0NBQ0YsRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDckIsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFnQixJQUFBLGdCQUFLLEVBQThCLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXBHLGtCQUFlLFVBQVUsQ0FBQyJ9