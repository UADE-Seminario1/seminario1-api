"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.endBinConnection = exports.createBinConnection = void 0;
var player_model_1 = __importStar(require("../models/player.model"));
var medal_model_1 = __importDefault(require("../models/medal.model"));
var bin_model_1 = __importStar(require("../models/bin.model"));
function getPlayerById(id) {
    return player_model_1.default.findById(id).exec();
}
function registerPoints(player, points, material) {
    return __awaiter(this, void 0, void 0, function () {
        var playerId, genericMedalsDocs, materialMedalsDocs, medalsGranted, coins, _i, _a, medal, playerMedalDoc, is_granted, newPlayerMedal;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    playerId = player._id;
                    return [4 /*yield*/, medal_model_1.default.find({
                            material: 'generic',
                            medals_required: { $size: 0 },
                        }).exec()];
                case 1:
                    genericMedalsDocs = _b.sent();
                    materialMedalsDocs = [];
                    if (!material) return [3 /*break*/, 3];
                    return [4 /*yield*/, medal_model_1.default.find({ material: material, medals_required: { $size: 0 } }).exec()];
                case 2:
                    materialMedalsDocs = _b.sent();
                    _b.label = 3;
                case 3:
                    medalsGranted = [];
                    coins = 0;
                    _i = 0, _a = genericMedalsDocs.concat(materialMedalsDocs);
                    _b.label = 4;
                case 4:
                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                    medal = _a[_i];
                    return [4 /*yield*/, player_model_1.PlayerMedalModel.findOne({
                            player: playerId,
                            medal: medal._id,
                        }).exec()];
                case 5:
                    playerMedalDoc = _b.sent();
                    if (!playerMedalDoc) return [3 /*break*/, 8];
                    console.log('el player tiene la medalla');
                    if (!!playerMedalDoc.is_granted) return [3 /*break*/, 7];
                    is_granted = playerMedalDoc.points + points >= medal.target_points;
                    return [4 /*yield*/, player_model_1.PlayerMedalModel.updateOne({ _id: playerMedalDoc }, { $inc: { points: points }, is_granted: is_granted }).exec()];
                case 6:
                    _b.sent();
                    console.log('concedida', is_granted);
                    if (is_granted) {
                        coins += medal.coins_reward;
                        console.log('monedas concedidas', medal.coins_reward);
                        medalsGranted.push({ name: medal.name, coins_reward: medal.coins_reward });
                    }
                    _b.label = 7;
                case 7: return [3 /*break*/, 10];
                case 8:
                    console.log('el player no tiene la medalla');
                    newPlayerMedal = new player_model_1.PlayerMedalModel({
                        player: player._id,
                        medal: medal._id,
                        points: points,
                        is_granted: false,
                        name: medal.name,
                        target_points: medal.target_points,
                        material: medal.material,
                    });
                    return [4 /*yield*/, newPlayerMedal.save()];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 4];
                case 11: return [4 /*yield*/, player_model_1.default.updateOne({ _id: playerId }, { $inc: { month_points: points, points: points, coins: coins } }).exec()];
                case 12:
                    _b.sent();
                    return [2 /*return*/, { points: points, medalsGranted: medalsGranted }];
            }
        });
    });
}
var createBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, connection_code, flow_points, material, playerId, bin, newBinConnection, responseData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                connection_code = body.connection_code, flow_points = body.flow_points, material = body.material;
                playerId = res.locals.jwtPayload.playerId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, bin_model_1.default.findOne({ connection_code: connection_code }).exec()];
            case 2:
                bin = _a.sent();
                if (!bin) {
                    return [2 /*return*/, res.status(404).json({ message: 'bin not found' })];
                }
                newBinConnection = new bin_model_1.BinConnectionModel({
                    bin: bin._id,
                    player: playerId,
                    flow_points: flow_points,
                    material: material,
                    state: 'requested',
                });
                return [4 /*yield*/, newBinConnection.save()];
            case 3:
                _a.sent();
                responseData = {
                    connection_id: newBinConnection._id,
                };
                return [2 /*return*/, res.status(200).json({ message: 'connection requested', data: responseData })];
            case 4:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
exports.createBinConnection = createBinConnection;
var endBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerId, player, pointsRegisteredResp, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                playerId = 'b4293250-482d-408f-92a4-1fe63088ef83';
                return [4 /*yield*/, getPlayerById(playerId)];
            case 1:
                player = _a.sent();
                pointsRegisteredResp = void 0;
                if (!player) return [3 /*break*/, 3];
                return [4 /*yield*/, registerPoints(player, 10, 'glass')];
            case 2:
                pointsRegisteredResp = _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, res.status(200).json({ message: 'conexión finalizada', data: pointsRegisteredResp })];
            case 4:
                err_2 = _a.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
exports.endBinConnection = endBinConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlucy5oYW5kbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9iaW5zLmhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxxRUFBOEc7QUFDOUcsc0VBQW1FO0FBQ25FLCtEQUF5RztBQUV6RyxTQUFTLGFBQWEsQ0FBQyxFQUFVO0lBQy9CLE9BQU8sc0JBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQWUsY0FBYyxDQUMzQixNQUF1QixFQUN2QixNQUFjLEVBQ2QsUUFBaUI7Ozs7OztvQkFFWCxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFFcUIscUJBQU0scUJBQVUsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLFFBQVEsRUFBRSxTQUFTOzRCQUNuQixlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO3lCQUM5QixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUE7O29CQUhILGlCQUFpQixHQUEwQixTQUd4QztvQkFFTCxrQkFBa0IsR0FBMEIsRUFBRSxDQUFDO3lCQUMvQyxRQUFRLEVBQVIsd0JBQVE7b0JBQ1cscUJBQU0scUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBOUYsa0JBQWtCLEdBQUcsU0FBeUUsQ0FBQzs7O29CQUc3RixhQUFhLEdBQStCLEVBQUUsQ0FBQztvQkFDL0MsS0FBSyxHQUFXLENBQUMsQ0FBQzswQkFDd0MsRUFBNUMsS0FBQSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7Ozt5QkFBNUMsQ0FBQSxjQUE0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