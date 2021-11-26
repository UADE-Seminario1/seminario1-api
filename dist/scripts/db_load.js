"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bluebird_1 = __importDefault(require("bluebird"));
var config_1 = __importDefault(require("../utils/config"));
var player_model_1 = __importDefault(require("../models/player.model"));
var medal_model_1 = __importDefault(require("../models/medal.model"));
var recycled_flow_model_1 = __importDefault(require("../models/recycled_flow.model"));
mongoose_1.default.Promise = bluebird_1.default;
var config = (0, config_1.default)();
var mongoUrl = config.get('mongodb:url');
var mongoOpts = config.get('mongodb:options');
var loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var player1, player2, medal1, medal2, medal3, medal4, flow1, flow2, flow3, flow4, flow5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                player1 = new player_model_1.default({
                    name: 'GodPlayer1',
                    user: {
                        fullname: 'Administrator 1',
                        username: 'admin1',
                        email: 'admin1@gmail.com',
                    },
                });
                return [4 /*yield*/, player1.save()];
            case 1:
                _a.sent();
                player2 = new player_model_1.default({
                    name: 'GodPlayer2',
                    user: {
                        fullname: 'Administrator 2',
                        username: 'admin2',
                        email: 'admin2@gmail.com',
                    },
                });
                return [4 /*yield*/, player2.save()];
            case 2:
                _a.sent();
                medal1 = new medal_model_1.default({
                    name: 'Subteniente Plastico',
                    description: 'Alcanza la meta reciclando más plástico',
                    target_points: 100,
                    material: 'plastic',
                    coins_reward: 5,
                });
                return [4 /*yield*/, medal1.save()];
            case 3:
                _a.sent();
                medal2 = new medal_model_1.default({
                    name: 'Coronel Metal',
                    description: 'Alcanza la meta reciclando más metal',
                    target_points: 50,
                    material: 'metal',
                    coins_reward: 9,
                });
                return [4 /*yield*/, medal2.save()];
            case 4:
                _a.sent();
                medal3 = new medal_model_1.default({
                    name: 'General Vidrio',
                    description: 'Alcanza la meta reciclando más vidrio',
                    target_points: 80,
                    material: 'glass',
                    coins_reward: 12,
                });
                return [4 /*yield*/, medal3.save()];
            case 5:
                _a.sent();
                medal4 = new medal_model_1.default({
                    name: 'Oficial Carton',
                    description: 'Alcanza la meta reciclando más carton',
                    target_points: 50,
                    material: 'cardboard',
                    coins_reward: 4,
                });
                return [4 /*yield*/, medal4.save()];
            case 6:
                _a.sent();
                flow1 = new recycled_flow_model_1.default({
                    name: 'Flujo del Vidrio',
                    material: 'glass',
                    steps: [
                        { number: '0', points: 2 },
                        { number: '1', points: 1 },
                        { number: '2', points: 1 },
                        { number: '3', points: 1 },
                        { number: '4', points: 1 },
                    ],
                });
                return [4 /*yield*/, flow1.save()];
            case 7:
                _a.sent();
                flow2 = new recycled_flow_model_1.default({
                    name: 'Flujo del Carton',
                    material: 'cardboard',
                    steps: [
                        { number: '0', points: 2 },
                        { number: '1', points: 1 },
                        { number: '2', points: 1 },
                        { number: '3', points: 1 },
                        { number: '4', points: 1 },
                    ],
                });
                return [4 /*yield*/, flow2.save()];
            case 8:
                _a.sent();
                flow3 = new recycled_flow_model_1.default({
                    name: 'Flujo del Plastico',
                    material: 'plastic',
                    steps: [
                        { number: '0', points: 2 },
                        { number: '1', points: 1 },
                        { number: '2', points: 1 },
                        { number: '3', points: 1 },
                        { number: '4', points: 1 },
                    ],
                });
                return [4 /*yield*/, flow3.save()];
            case 9:
                _a.sent();
                flow4 = new recycled_flow_model_1.default({
                    name: 'Flujo del Papel',
                    material: 'paper',
                    steps: [
                        { number: '0', points: 2 },
                        { number: '1', points: 1 },
                        { number: '2', points: 1 },
                        { number: '3', points: 1 },
                        { number: '4', points: 1 },
                    ],
                });
                return [4 /*yield*/, flow4.save()];
            case 10:
                _a.sent();
                flow5 = new recycled_flow_model_1.default({
                    name: 'Flujo del Metal',
                    material: 'metal',
                    steps: [
                        { number: '0', points: 2 },
                        { number: '1', points: 1 },
                        { number: '2', points: 1 },
                        { number: '3', points: 1 },
                        { number: '4', points: 1 },
                    ],
                });
                return [4 /*yield*/, flow5.save()];
            case 11:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
mongoose_1.default
    .connect(mongoUrl, mongoOpts)
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Connected to the MongoDB database');
                return [4 /*yield*/, loadData()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) {
    console.log('Cannot connect to the MongoDB database');
    console.log(e);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJfbG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2RiX2xvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBb0Q7QUFDcEQsc0RBQWdDO0FBQ2hDLDJEQUF3QztBQUN4Qyx3RUFBc0U7QUFDdEUsc0VBQW1FO0FBQ25FLHNGQUF5RjtBQUV6RixrQkFBUSxDQUFDLE9BQU8sR0FBRyxrQkFBUSxDQUFDO0FBRTVCLElBQU0sTUFBTSxHQUFHLElBQUEsZ0JBQVMsR0FBRSxDQUFDO0FBRTNCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsSUFBTSxTQUFTLEdBQW1CLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVoRSxJQUFNLFFBQVEsR0FBRzs7Ozs7Z0JBQ1QsT0FBTyxHQUFvQixJQUFJLHNCQUFXLENBQUM7b0JBQy9DLElBQUksRUFBRSxZQUFZO29CQUNsQixJQUFJLEVBQUU7d0JBQ0osUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLEtBQUssRUFBRSxrQkFBa0I7cUJBQzFCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxxQkFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUFwQixTQUFvQixDQUFDO2dCQUVmLE9BQU8sR0FBb0IsSUFBSSxzQkFBVyxDQUFDO29CQUMvQyxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsSUFBSSxFQUFFO3dCQUNKLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gscUJBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBcEIsU0FBb0IsQ0FBQztnQkFFZixN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