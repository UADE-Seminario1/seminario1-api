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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var config_1 = __importDefault(require("./utils/config"));
var checkJwt_1 = __importDefault(require("./middlewares/checkJwt"));
var players = __importStar(require("./handlers/players.handlers"));
var bins = __importStar(require("./handlers/bins.handlers"));
var router = (0, express_promise_router_1.default)();
var config = (0, config_1.default)();
var checkJwt = (0, checkJwt_1.default)(config);
router.post('/api/players/session', players.signUpAndLogin(config));
router.post('/api/bins/connections', [checkJwt], bins.createBinConnection(config));
router.get('/api/bins/:binId/connections/requested', bins.getRequestedBinConnection(config));
router.head('/api/bins/:binId/connections/requested', bins.checkRequestedBinConnection(config));
router.patch('/api/bins/connections/:connectionId/end', bins.endBinConnection(config));
router.patch('/api/bins/connections/:connectionId/accept', bins.acceptBinConnection(config));
router.head('/api/bins/connections/:connectionId/accepted', bins.checkAcceptedBinConnection(config));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNEM7QUFDNUMsMERBQXVDO0FBQ3ZDLG9FQUFxRDtBQUNyRCxtRUFBdUQ7QUFDdkQsNkRBQWlEO0FBRWpELElBQU0sTUFBTSxHQUFHLElBQUEsZ0NBQU0sR0FBRSxDQUFDO0FBQ3hCLElBQU0sTUFBTSxHQUFHLElBQUEsZ0JBQVMsR0FBRSxDQUFDO0FBQzNCLElBQU0sUUFBUSxHQUFHLElBQUEsa0JBQWUsRUFBQyxNQUFNLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbkYsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RixNQUFNLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2hHLE1BQU0sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkYsTUFBTSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RixNQUFNLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRXJHLGtCQUFlLE1BQU0sQ0FBQyJ9