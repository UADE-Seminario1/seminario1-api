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
exports.signUpAndLogin = void 0;
var google_auth_library_1 = require("google-auth-library");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var player_model_1 = __importDefault(require("../models/player.model"));
function getToken(config, data) {
    var secret = config.get('app:secret');
    var jwtExpiration = config.get('jwt:expiration');
    return jsonwebtoken_1.default.sign(data, secret, {
        expiresIn: jwtExpiration,
    });
}
var signUpAndLogin = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, tokens, keys, oAuth2Client, url, googleResponse, data, fullname, photo, email, player, playerWithSameEmail, emailParts, name_1, newPlayer, token, playerData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                tokens = body.tokens;
                keys = config.get('google_auth');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
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
                return [4 /*yield*/, player_model_1.default.findOne({ 'user.email': email })];
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
                token = getToken(config, { playerId: player._id });
                playerData = {
                    id: player._id,
                    name: player.name,
                    user: player.user,
                    month_points: player.month_points,
                    points: player.points,
                    coins: player.coins,
                    /*medals: player.medals, TODO*/
                };
                res.append('x-access-token', token);
                return [2 /*return*/, res.status(201).json({ message: 'session created', player: playerData })];
            case 7:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ message: 'something wrong happened' })];
            case 8: return [2 /*return*/];
        }
    });
}); }; };
exports.signUpAndLogin = signUpAndLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5oYW5kbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9wbGF5ZXJzLmhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJEQUFtRDtBQUNuRCw4REFBK0I7QUFDL0Isd0VBQXNFO0FBRXRFLFNBQVMsUUFBUSxDQUFDLE1BQXNCLEVBQUUsSUFBWTtJQUNwRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVuRCxPQUFPLHNCQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDNUIsU0FBUyxFQUFFLGFBQWE7S0FDekIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVNLElBQU0sY0FBYyxHQUFHLFVBQUMsTUFBc0IsSUFBSyxPQUFBLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7O2dCQUNsRixJQUFJLEdBQUssR0FBRyxLQUFSLENBQVM7Z0JBQ2IsTUFBTSxHQUFLLElBQUksT0FBVCxDQUFVO2dCQUNsQixJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztnQkFHL0IsWUFBWSxHQUFHLElBQUksa0NBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUUsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFOUIsR0FBRyxHQUFHLHFGQUFxRixDQUFDO2dCQUMzRSxxQkFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBcEQsY0FBYyxHQUFHLFNBQW1DO2dCQUNsRCxJQUFJLEdBQW9CLGNBQWMsS0FBbEMsQ0FBbUM7Z0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRVosUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUV2QyxNQUFNLFNBQWlCLENBQUM7Z0JBQ3dCLHFCQUFNLHNCQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUE7O2dCQUFoRyxtQkFBbUIsR0FBMkIsU0FBa0Q7cUJBQ2xHLENBQUMsbUJBQW1CLEVBQXBCLHdCQUFvQjtnQkFDaEIsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLFNBQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixTQUFTLEdBQW9CLElBQUksc0JBQVcsQ0FBQztvQkFDakQsSUFBSSxRQUFBO29CQUNKLElBQUksRUFBRTt3QkFDSixRQUFRLFVBQUE7d0JBQ1IsUUFBUSxFQUFFLE1BQUk7d0JBQ2QsS0FBSyxPQUFBO3dCQUNMLEtBQUssT0FBQTtxQkFDTjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gscUJBQU0sU0FBUyxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBdEIsU0FBc0IsQ0FBQztnQkFDdkIsTUFBTSxHQUFHLFNBQVMsQ0FBQzs7O2dCQUVuQixNQUFNLEdBQUcsbUJBQW1CLENBQUM7OztnQkFHekIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRW5ELFVBQVUsR0FBRztvQkFDakIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHO29CQUNkLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO29CQUNqQixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7b0JBQ2pDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO29CQUNuQiwrQkFBK0I7aUJBQ2hDLENBQUM7Z0JBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEMsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUM7OztnQkFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLENBQUMsQ0FBQztnQkFDakIsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUFDOzs7O0tBRXhFLEVBeER5RCxDQXdEekQsQ0FBQztBQXhEVyxRQUFBLGNBQWMsa0JBd0R6QiJ9