"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.endBinConnection = exports.acceptBinConnection = exports.checkAcceptedBinConnection = exports.checkRequestedBinConnection = exports.getRequestedBinConnection = exports.createBinConnection = void 0;
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
                    if (!(material || material == 'unknown')) return [3 /*break*/, 3];
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
                return [2 /*return*/, res.status(200).json({ message: 'bin-connection requested', data: responseData })];
            case 4:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
exports.createBinConnection = createBinConnection;
var getRequestedBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, binId, binConnection, responseData, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                binId = params.binId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, bin_model_1.BinConnectionModel.findOne({ bin: binId, state: 'requested' }, {}, { sort: { createdAt: -1 } }).exec()];
            case 2:
                binConnection = _a.sent();
                if (!binConnection) {
                    return [2 /*return*/, res.status(404).json({ message: 'recent requested bin-connection not found' })];
                }
                responseData = {
                    id: binConnection._id,
                    player_id: binConnection.player,
                    flow_points: binConnection.flow_points,
                    points: binConnection.points,
                    material: binConnection.material,
                    initial_weight: binConnection.initial_weight,
                    final_weight: binConnection.final_weight,
                    state: binConnection.state,
                    created_at: binConnection.createdAt,
                    updated_at: binConnection.updatedAt,
                };
                return [2 /*return*/, res.status(200).json({ data: responseData })];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.getRequestedBinConnection = getRequestedBinConnection;
var checkRequestedBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, binId, binConnection, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                binId = params.binId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, bin_model_1.BinConnectionModel.findOne({ bin: binId, state: 'requested' }, {}, { sort: { createdAt: -1 } }).exec()];
            case 2:
                binConnection = _a.sent();
                if (!binConnection) {
                    return [2 /*return*/, res.status(404).end()];
                }
                return [2 /*return*/, res.status(200).end()];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                return [2 /*return*/, res.status(500).end()];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.checkRequestedBinConnection = checkRequestedBinConnection;
var checkAcceptedBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, connectionId, binConnection, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                connectionId = params.connectionId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, bin_model_1.BinConnectionModel.findOne({
                        _id: connectionId,
                        state: 'accepted',
                    }).exec()];
            case 2:
                binConnection = _a.sent();
                if (!binConnection) {
                    return [2 /*return*/, res.status(404).end()];
                }
                return [2 /*return*/, res.status(200).end()];
            case 3:
                err_4 = _a.sent();
                console.log(err_4);
                return [2 /*return*/, res.status(500).end()];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.checkAcceptedBinConnection = checkAcceptedBinConnection;
var acceptBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, body, connectionId, initial_weight, binConnection, responseData, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params, body = req.body;
                connectionId = params.connectionId;
                initial_weight = body.initial_weight;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, bin_model_1.BinConnectionModel.findByIdAndUpdate(connectionId, {
                        initial_weight: initial_weight,
                        state: 'accepted',
                    }, { returnDocument: 'after' }).exec()];
            case 2:
                binConnection = _a.sent();
                if (!binConnection) {
                    return [2 /*return*/, res.status(404).json({ message: 'bin-connection not found' })];
                }
                responseData = {
                    id: binConnection._id,
                    player_id: binConnection.player,
                    flow_points: binConnection.flow_points,
                    points: binConnection.points,
                    material: binConnection.material,
                    initial_weight: binConnection.initial_weight,
                    final_weight: binConnection.final_weight,
                    state: binConnection.state,
                    created_at: binConnection.createdAt,
                    updated_at: binConnection.updatedAt,
                };
                return [2 /*return*/, res.status(200).json({ message: 'bin-connection accepted', data: responseData })];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.acceptBinConnection = acceptBinConnection;
var endBinConnection = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, body, connectionId, final_weight, binConnection, playerId, flow_points, material, initial_weight, deltaWeigth, points, player, pointsRegisteredResp, responseData, binConnectionUpdated, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params, body = req.body;
                connectionId = params.connectionId;
                final_weight = body.final_weight;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                return [4 /*yield*/, bin_model_1.BinConnectionModel.findOne({
                        _id: connectionId,
                        state: 'accepted',
                    })];
            case 2:
                binConnection = _a.sent();
                if (!binConnection) {
                    return [2 /*return*/, res.status(404).json({ message: 'bin-connection not found' })];
                }
                playerId = binConnection.player, flow_points = binConnection.flow_points, material = binConnection.material, initial_weight = binConnection.initial_weight;
                deltaWeigth = final_weight - initial_weight;
                points = flow_points;
                console.log(deltaWeigth);
                return [4 /*yield*/, getPlayerById(playerId)];
            case 3:
                player = _a.sent();
                pointsRegisteredResp = void 0;
                responseData = void 0;
                binConnectionUpdated = void 0;
                if (!player) return [3 /*break*/, 6];
                return [4 /*yield*/, registerPoints(player, points, material)];
            case 4:
                pointsRegisteredResp = _a.sent();
                return [4 /*yield*/, bin_model_1.BinConnectionModel.findByIdAndUpdate(connectionId, {
                        points: points,
                        final_weight: final_weight,
                        state: 'ended',
                    }, { returnDocument: 'after' }).exec()];
            case 5:
                binConnectionUpdated = _a.sent();
                responseData = __assign({ id: binConnectionUpdated._id, player_id: binConnectionUpdated.player, flow_points: binConnectionUpdated.flow_points, points: binConnectionUpdated.points, material: binConnectionUpdated.material, initial_weight: binConnectionUpdated.initial_weight, final_weight: binConnectionUpdated.final_weight, state: binConnectionUpdated.state, created_at: binConnectionUpdated.createdAt, updated_at: binConnectionUpdated.updatedAt }, pointsRegisteredResp);
                _a.label = 6;
            case 6: return [2 /*return*/, res.status(200).json({ message: 'bin-connection ended', data: responseData })];
            case 7:
                err_6 = _a.sent();
                console.log(err_6);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 8: return [2 /*return*/];
        }
    });
}); }; };
exports.endBinConnection = endBinConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlucy5oYW5kbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9iaW5zLmhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHFFQUE4RztBQUM5RyxzRUFBbUU7QUFDbkUsK0RBQXlHO0FBRXpHLFNBQVMsYUFBYSxDQUFDLEVBQVU7SUFDL0IsT0FBTyxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBZSxjQUFjLENBQzNCLE1BQXVCLEVBQ3ZCLE1BQWMsRUFDZCxRQUFpQjs7Ozs7O29CQUVYLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUVxQixxQkFBTSxxQkFBVSxDQUFDLElBQUksQ0FBQzs0QkFDckUsUUFBUSxFQUFFLFNBQVM7NEJBQ25CLGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7eUJBQzlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBSEgsaUJBQWlCLEdBQTBCLFNBR3hDO29CQUVMLGtCQUFrQixHQUEwQixFQUFFLENBQUM7eUJBQy9DLENBQUEsUUFBUSxJQUFJLFFBQVEsSUFBSSxTQUFTLENBQUEsRUFBakMsd0JBQWlDO29CQUNkLHFCQUFNLHFCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQTlGLGtCQUFrQixHQUFHLFNBQXlFLENBQUM7OztvQkFHN0YsYUFBYSxHQUErQixFQUFFLENBQUM7b0JBQy9DLEtBQUssR0FBVyxDQUFDLENBQUM7MEJBQ3dDLEVBQTVDLEtBQUEsaUJBQWlCLENB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