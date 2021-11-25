"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecycledFlowInstanceModel = void 0;
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var stepSchema = new mongoose_1.Schema({
    number: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
});
var recycledFlowSchema = new mongoose_1.Schema({
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
    material: {
        type: String,
        required: true,
    },
    steps: [
        {
            type: stepSchema,
            required: true,
        },
    ],
}, { timestamps: true });
var RecycledFlowModel = (0, mongoose_1.model)('recycled_flow', recycledFlowSchema, 'recycled_flows', true);
var recycledFlowInstanceSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
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
}, { timestamps: true });
var RecycledFlowInstanceModel = (0, mongoose_1.model)('recycled_flow_instance', recycledFlowInstanceSchema, 'recycled_flow_instances', true);
exports.RecycledFlowInstanceModel = RecycledFlowInstanceModel;
exports.default = RecycledFlowModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjeWNsZWRfZmxvdy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcmVjeWNsZWRfZmxvdy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBb0M7QUFDcEMscUNBQTBEO0FBaUIxRCxJQUFNLFVBQVUsR0FBVyxJQUFJLGlCQUFNLENBQUM7SUFDcEMsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBTSxrQkFBa0IsR0FBVyxJQUFJLGlCQUFNLENBQzNDO0lBQ0UsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNoQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTDtZQUNFLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtDQUNGLEVBQ0QsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUM7QUFFRixJQUFNLGlCQUFpQixHQUF1QixJQUFBLGdCQUFLLEVBQ2pELGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLElBQUksQ0FDTCxDQUFDO0FBWUYsSUFBTSwwQkFBMEIsR0FBVyxJQUFJLGlCQUFNLENBQ25EO0lBQ0UsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNoQjtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FDM0I7Q0FDRixFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFDO0FBRUYsSUFBTSx5QkFBeUIsR0FBK0IsSUFBQSxnQkFBSyxFQUdqRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUdoRiw4REFBeUI7QUFEbEMsa0JBQWUsaUJBQWlCLENBQUMifQ==