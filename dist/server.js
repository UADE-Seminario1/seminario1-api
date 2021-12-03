"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lightship_1 = require("lightship");
var app_1 = __importDefault(require("./app"));
var config_1 = __importDefault(require("./utils/config"));
var config = (0, config_1.default)();
var lightship = (0, lightship_1.createLightship)();
var server = app_1.default.listen(config.get('app:PORT'), config.get('app:HOST'), function () {
    console.log('  App is running at http://localhost:%d in %s mode', config.get('app:PORT'), config.get('NODE_ENV'));
    console.log('  Press CTRL-C to stop\n');
    lightship.signalReady();
});
exports.default = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDQUE0QztBQUM1Qyw4Q0FBd0I7QUFDeEIsMERBQXVDO0FBRXZDLElBQU0sTUFBTSxHQUFHLElBQUEsZ0JBQVMsR0FBRSxDQUFDO0FBQzNCLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQWUsR0FBRSxDQUFDO0FBRXBDLElBQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEgsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9