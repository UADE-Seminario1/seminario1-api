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
exports.signUpAndLogin = void 0;
var google_auth_library_1 = require("google-auth-library");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var player_model_1 = __importStar(require("../models/player.model"));
function getToken(config, data) {
    var secret = config.get('app:secret');
    var jwtExpiration = config.get('jwt:expiration');
    return jsonwebtoken_1.default.sign(data, secret, {
        expiresIn: jwtExpiration,
    });
}
var signUpAndLogin = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, tokens, keys, oAuth2Client, url, googleResponse, data, fullname, photo, email, player, playerWithSameEmail, emailParts, name_1, newPlayer, medalsData, playerMedalsDocs, token, playerData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                tokens = body.tokens;
                keys = config.get('google_auth');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                oAuth2Client = new google_auth_library_1.OAuth2Client(keys.client_id, keys.client_secret);
                oAuth2Client.setCredentials(tokens);
                url = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos';
                return [4 /*yield*/, oAuth2Client.request({ url: url })];
            case 2:
                googleResponse = _a.sent();
                data = googleResponse.data;
                console.log(data);
                fullname = data.names[0].unstructuredName;
                photo = data.photos[0].url;
                email = data.emailAddresses[0].value;
                player = void 0;
                return [4 /*yield*/, player_model_1.default.findOne({ 'user.email': email }).exec()];
            case 3:
                playerWithSameEmail = _a.sent();
                if (!!playerWithSameEmail) return [3 /*break*/, 5];
                emailParts = email.split('@');
                name_1 = emailParts[0];
                newPlayer = new player_model_1.default({
                    name: name_1,
                    user: {
                        fullname: fullname,
                        username: name_1,
                        email: email,
                        photo: photo,
                    },
                });
                return [4 /*yield*/, newPlayer.save()];
            case 4:
                _a.sent();
                player = newPlayer;
                return [3 /*break*/, 6];
            case 5:
                player = playerWithSameEmail;
                _a.label = 6;
            case 6:
                medalsData = void 0;
                return [4 /*yield*/, player_model_1.PlayerMedalModel.find({
                        player: player._id,
                    }).exec()];
            case 7:
                playerMedalsDocs = _a.sent();
                if (playerMedalsDocs) {
                    medalsData = playerMedalsDocs.map(function (e) {
                        return {
                            name: e.name,
                            target_points: e.target_points,
                            points: e.points,
                            material: e.material,
                            is_granted: e.is_granted,
                        };
                    });
                }
                token = getToken(config, { playerId: player._id });
                playerData = {
                    id: player._id,
                    name: player.name,
                    user: player.user,
                    month_points: player.month_points,
                    points: player.points,
                    coins: player.coins,
                    medals: medalsData,
                };
                res.append('x-access-token', token);
                return [2 /*return*/, res.status(201).json({ message: 'session created', player: playerData })];
            case 8:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 9: return [2 /*return*/];
        }
    });
}); }; };
exports.signUpAndLogin = signUpAndLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5oYW5kbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9wbGF5ZXJzLmhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyREFBbUQ7QUFDbkQsOERBQStCO0FBQy9CLHFFQUE4RztBQUU5RyxTQUFTLFFBQVEsQ0FBQyxNQUFzQixFQUFFLElBQVk7SUFDcEQsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFbkQsT0FBTyxzQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzVCLFNBQVMsRUFBRSxhQUFhO0tBQ3pCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFTSxJQUFNLGNBQWMsR0FBRyxVQUFDLE1BQXNCLElBQUssT0FBQSxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDbEYsSUFBSSxHQUFLLEdBQUcsS0FBUixDQUFTO2dCQUNiLE1BQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtnQkFDbEIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7Z0JBRy9CLFlBQVksR0FBRyxJQUFJLGtDQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzFFLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTlCLEdBQUcsR0FBRyxxRkFBcUYsQ0FBQztnQkFDM0UscUJBQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQXBELGNBQWMsR0FBRyxTQUFt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