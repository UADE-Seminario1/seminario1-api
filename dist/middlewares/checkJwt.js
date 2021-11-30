"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var checkJwtBuilder = function (config) { return function (req, res, next) {
    var tokenName = 'x-access-token';
    var token = req.headers[tokenName];
    var secret = config.get('app:secret');
    var jwtExpiration = config.get('jwt:expiration');
    if (!token) {
        res.status(500).json({ auth: false, message: 'no token provided' });
        res.end();
    }
    var jwtPayload;
    try {
        jwtPayload = jsonwebtoken_1.default.verify(token, secret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (_a) {
        res.status(401).json({ auth: false, message: 'token authentication failed' });
        res.end();
    }
    var playerId = jwtPayload.playerId;
    var newToken = jsonwebtoken_1.default.sign({ playerId: playerId }, secret, {
        expiresIn: jwtExpiration,
    });
    res.append(tokenName, newToken);
    next();
}; };
exports.default = checkJwtBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tKd3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tKd3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBK0I7QUFHL0IsSUFBTSxlQUFlLEdBQUcsVUFBQyxNQUFzQixJQUFLLE9BQUEsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ2xHLElBQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ25DLElBQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNYO0lBRUQsSUFBSSxVQUFVLENBQUM7SUFFZixJQUFJO1FBQ0YsVUFBVSxHQUFRLHNCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDcEM7SUFBQyxXQUFNO1FBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDLENBQUM7UUFDOUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ1g7SUFFTyxJQUFBLFFBQVEsR0FBSyxVQUFVLFNBQWYsQ0FBZ0I7SUFDaEMsSUFBTSxRQUFRLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxFQUFFLE1BQU0sRUFBRTtRQUM5QyxTQUFTLEVBQUUsYUFBYTtLQUN6QixDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVoQyxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsRUE1Qm1ELENBNEJuRCxDQUFDO0FBRUYsa0JBQWUsZUFBZSxDQUFDIn0=