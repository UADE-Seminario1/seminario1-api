"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinConnectionModel = void 0;
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var bin_schema = new mongoose_1.Schema({
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
    connection_code: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
}, { timestamps: true });
var BinModel = (0, mongoose_1.model)('bin', bin_schema, 'bins', true);
var bin_connection_schema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
    },
    bin: {
        type: String,
        required: true,
    },
    player: {
        type: String,
        required: true,
    },
    flow_points: {
        type: Number,
        required: false,
        default: 0,
    },
    points: {
        type: Number,
        required: false,
        default: 0,
    },
    weight: {
        type: Number,
        required: false,
        default: 0,
    },
    material: {
        type: String,
        required: false,
        default: 'unknown',
    },
    state: {
        type: String,
        required: true,
        enum: ['requested', 'accepted', 'ended'],
        default: 'requested',
    },
}, { timestamps: true });
exports.BinConnectionModel = (0, mongoose_1.model)('bin_connection', bin_connection_schema, 'bin_connections', true);
exports.default = BinModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9iaW4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQW9DO0FBQ3BDLHFDQUEwRDtBQVcxRCxJQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQzNCO0lBQ0UsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNoQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDckIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFjLElBQUEsZ0JBQUssRUFBMEIsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFlNUYsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLGlCQUFNLENBQ3RDO0lBQ0UsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNoQjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztRQUN4QyxPQUFPLEVBQUUsV0FBVztLQUNyQjtDQUNGLEVBQ0QsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUM7QUFFVyxRQUFBLGtCQUFrQixHQUF3QixJQUFBLGdCQUFLLEVBQzFELGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLElBQUksQ0FDTCxDQUFDO0FBRUYsa0JBQWUsUUFBUSxDQUFDIn0=