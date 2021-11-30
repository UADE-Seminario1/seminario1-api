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
var bin_model_1 = __importDefault(require("../models/bin.model"));
mongoose_1.default.Promise = bluebird_1.default;
var config = (0, config_1.default)();
var mongoUrl = config.get('mongodb:url');
var mongoOpts = config.get('mongodb:options');
var loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var findOneAndUpdateOptions, medalNovato, medalAsiduo, medalEstrella;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Loading data into the database...');
                findOneAndUpdateOptions = { upsert: true /*, overwrite: true*/ };
                return [4 /*yield*/, player_model_1.default.findOneAndUpdate({ name: 'GodPlayer1' }, {
                        name: 'GodPlayer1',
                        user: {
                            fullname: 'Administrator 1',
                            username: 'admin1',
                            email: 'admin1@gmail.com',
                        },
                    }, findOneAndUpdateOptions).exec()];
            case 1:
                _a.sent();
                return [4 /*yield*/, player_model_1.default.findOneAndUpdate({ name: 'GodPlayer2' }, {
                        name: 'GodPlayer2',
                        user: {
                            fullname: 'Administrator 2',
                            username: 'admin2',
                            email: 'admin2@gmail.com',
                        },
                    }, findOneAndUpdateOptions).exec()];
            case 2:
                _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Subteniente Plastico' }, {
                        name: 'Subteniente Plastico',
                        description: 'Alcanza la meta reciclando más plástico',
                        target_points: 100,
                        material: 'plastic',
                        coins_reward: 5,
                    }, findOneAndUpdateOptions).exec()];
            case 3:
                _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Coronel Metal' }, {
                        name: 'Coronel Metal',
                        description: 'Alcanza la meta reciclando más metal',
                        target_points: 50,
                        material: 'metal',
                        coins_reward: 9,
                    }, findOneAndUpdateOptions).exec()];
            case 4:
                _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'General Vidrio' }, {
                        name: 'General Vidrio',
                        description: 'Alcanza la meta reciclando más vidrio',
                        target_points: 80,
                        material: 'glass',
                        coins_reward: 12,
                    }, findOneAndUpdateOptions).exec()];
            case 5:
                _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Oficial Carton' }, {
                        name: 'Oficial Carton',
                        description: 'Alcanza la meta reciclando más carton',
                        target_points: 50,
                        material: 'cardboard',
                        coins_reward: 4,
                    }, findOneAndUpdateOptions).exec()];
            case 6:
                _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Reciclador Novato' }, {
                        name: 'Reciclador Novato',
                        description: 'Alcanza la meta por reciclar',
                        target_points: 100,
                        material: 'generic',
                        coins_reward: 4,
                    }, findOneAndUpdateOptions).exec()];
            case 7:
                medalNovato = _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Reciclador Asiduo' }, {
                        name: 'Reciclador Asiduo',
                        description: 'Alcanza la meta por continuar reciclando',
                        target_points: 400,
                        material: 'generic',
                        coins_reward: 8,
                        medals_required: [medalNovato._id],
                    }, findOneAndUpdateOptions).exec()];
            case 8:
                medalAsiduo = _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Reciclador Estrella' }, {
                        name: 'Reciclador Estrella',
                        description: 'Alcanza la meta por continuar reciclando',
                        target_points: 1000,
                        material: 'generic',
                        coins_reward: 12,
                        medals_required: [medalAsiduo._id],
                    }, findOneAndUpdateOptions).exec()];
            case 9:
                medalEstrella = _a.sent();
                return [4 /*yield*/, medal_model_1.default.findOneAndUpdate({ name: 'Reciclador Visionario 1' }, {
                        name: 'Reciclador Visionario 1',
                        description: 'Alcanza la meta por continuar reciclando',
                        target_points: 2000,
                        material: 'generic',
                        coins_reward: 24,
                        medals_required: [medalEstrella._id],
                    }, findOneAndUpdateOptions).exec()];
            case 10:
                _a.sent();
                return [4 /*yield*/, recycled_flow_model_1.default.findOneAndUpdate({ name: 'Flujo del Vidrio' }, {
                        name: 'Flujo del Vidrio',
                        material: 'glass',
                        steps: [
                            { number: '0', points: 2 },
                            { number: '1', points: 1 },
                            { number: '2', points: 1 },
                            { number: '3', points: 1 },
                            { number: '4', points: 1 },
                        ],
                    }, findOneAndUpdateOptions).exec()];
            case 11:
                _a.sent();
                return [4 /*yield*/, recycled_flow_model_1.default.findOneAndUpdate({ name: 'Flujo del Carton' }, {
                        name: 'Flujo del Carton',
                        material: 'cardboard',
                        steps: [
                            { number: '0', points: 2 },
                            { number: '1', points: 1 },
                            { number: '2', points: 1 },
                            { number: '3', points: 1 },
                            { number: '4', points: 1 },
                        ],
                    }, findOneAndUpdateOptions).exec()];
            case 12:
                _a.sent();
                return [4 /*yield*/, recycled_flow_model_1.default.findOneAndUpdate({ name: 'Flujo del Plastico' }, {
                        name: 'Flujo del Plastico',
                        material: 'plastic',
                        steps: [
                            { number: '0', points: 2 },
                            { number: '1', points: 1 },
                            { number: '2', points: 1 },
                            { number: '3', points: 1 },
                            { number: '4', points: 1 },
                        ],
                    }, findOneAndUpdateOptions).exec()];
            case 13:
                _a.sent();
                return [4 /*yield*/, recycled_flow_model_1.default.findOneAndUpdate({ name: 'Flujo del Papel' }, {
                        name: 'Flujo del Papel',
                        material: 'paper',
                        steps: [
                            { number: '0', points: 2 },
                            { number: '1', points: 1 },
                            { number: '2', points: 1 },
                            { number: '3', points: 1 },
                            { number: '4', points: 1 },
                        ],
                    }, findOneAndUpdateOptions).exec()];
            case 14:
                _a.sent();
                return [4 /*yield*/, recycled_flow_model_1.default.findOneAndUpdate({ name: 'Flujo del Metal' }, {
                        name: 'Flujo del Metal',
                        material: 'metal',
                        steps: [
                            { number: '0', points: 2 },
                            { number: '1', points: 1 },
                            { number: '2', points: 1 },
                            { number: '3', points: 1 },
                            { number: '4', points: 1 },
                        ],
                    }, findOneAndUpdateOptions).exec()];
            case 15:
                _a.sent();
                return [4 /*yield*/, bin_model_1.default.findOneAndUpdate({ name: 'cesto inteligente prototipo 1' }, {
                        name: 'cesto inteligente prototipo 1',
                        connection_code: '123',
                    }, findOneAndUpdateOptions).exec()];
            case 16:
                _a.sent();
                console.log('Data was loaded in the database');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJfbG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2RiX2xvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBb0Q7QUFDcEQsc0RBQWdDO0FBQ2hDLDJEQUF3QztBQUN4Qyx3RUFBaUQ7QUFDakQsc0VBQW1FO0FBQ25FLHNGQUE4RDtBQUM5RCxrRUFBMkM7QUFFM0Msa0JBQVEsQ0FBQyxPQUFPLEdBQUcsa0JBQVEsQ0FBQztBQUU1QixJQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFTLEdBQUUsQ0FBQztBQUUzQixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLElBQU0sU0FBUyxHQUFtQixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFaEUsSUFBTSxRQUFRLEdBQUc7Ozs7O2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFFM0MsdUJBQXVCLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3ZFLHFCQUFNLHNCQUFXLENBQUMsZ0JBQWdCLENBQ2hDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUN0Qjt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFOzRCQUNKLFFBQVEsRUFBRSxpQkFBaUI7NEJBQzNCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixLQUFLLEVBQUUsa0JBQWtCO3lCQUMxQjtxQkFDRixFQUNELHVCQUF1QixDQUN4QixDQUFDLElBQUksRUFBRSxFQUFBOztnQkFYUixTQVdRLENBQUM7Z0JBRVQscUJBQU0sc0JBQVcsQ0FBQyxnQkFBZ0IsQ0FDaEMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ3RCO3dCQUNFLElBQUksRUFBRSxZQUFZ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