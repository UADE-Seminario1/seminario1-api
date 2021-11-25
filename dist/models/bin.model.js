"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinConnection = void 0;
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
var BinModel = (0, mongoose_1.model)("bin", bin_schema, "bins", true);
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
}, { timestamps: true });
exports.BinConnection = (0, mongoose_1.model)("bin_connection", bin_connection_schema, "bin_connections", true);
exports.default = BinModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9iaW4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQW9DO0FBQ3BDLHFDQUEwRDtBQVcxRCxJQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDMUIsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNsQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxlQUFlLEVBQUU7UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsSUFBSTtLQUNkO0NBQ0osRUFDRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFjLElBQUEsZ0JBQUssRUFDN0IsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sSUFBSSxDQUNQLENBQUM7QUFVRixJQUFNLHFCQUFxQixHQUFHLElBQUksaUJBQU0sQ0FBQztJQUNyQyxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxTQUFNO0tBQ2xCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FDSixFQUNHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUN2QixDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQXdCLElBQUEsZ0JBQUssRUFDbkQsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDakIsSUFBSSxDQUNQLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUMifQ==