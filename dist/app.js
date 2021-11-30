"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var body_parser_1 = __importDefault(require("body-parser"));
var lusca_1 = __importDefault(require("lusca"));
var mongoose_1 = __importDefault(require("mongoose"));
var bluebird_1 = __importDefault(require("bluebird"));
var errorhandler_1 = __importDefault(require("errorhandler"));
var config_1 = __importDefault(require("./utils/config"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
mongoose_1.default.Promise = bluebird_1.default;
var config = (0, config_1.default)();
var node_env = config.get('node_env');
var app = (0, express_1.default)();
var mongoUrl = config.get('mongodb:url');
var mongoOpts = config.get('mongodb:options');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    exposedHeaders: 'x-access-token',
};
mongoose_1.default
    .connect(mongoUrl, mongoOpts)
    .then(function () {
    console.log('Connected to the MongoDB database');
})
    .catch(function (e) {
    console.log('Cannot connect to the MongoDB database');
    console.log(e);
});
app.set('port', config.get('app:port'));
app.use((0, cors_1.default)(corsOptions));
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(lusca_1.default.xframe('SAMEORIGIN'));
app.use(lusca_1.default.xssProtection(true));
if (node_env === 'development') {
    app.use((0, errorhandler_1.default)());
}
app.use(routes_1.default);
app.get('/', function (_, res) {
    res.send('Hello World');
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUM5Qiw0REFBc0M7QUFDdEMsNERBQXFDO0FBQ3JDLGdEQUEwQjtBQUMxQixzREFBb0Q7QUFDcEQsc0RBQWdDO0FBQ2hDLDhEQUF3QztBQUN4QywwREFBdUM7QUFDdkMsb0RBQThCO0FBQzlCLDhDQUF3QjtBQUN4QixrQkFBUSxDQUFDLE9BQU8sR0FBRyxrQkFBUSxDQUFDO0FBRTVCLElBQU0sTUFBTSxHQUFHLElBQUEsZ0JBQVMsR0FBRSxDQUFDO0FBQzNCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsSUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsSUFBTSxTQUFTLEdBQW1CLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVoRSxJQUFNLFdBQVcsR0FBRztJQUNsQixNQUFNLEVBQUUsdUJBQXVCO0lBQy9CLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsY0FBYyxFQUFFLGdCQUFnQjtDQUNqQyxDQUFDO0FBRUYsa0JBQVE7S0FDTCxPQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztLQUM1QixJQUFJLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUwsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEscUJBQVcsR0FBRSxDQUFDLENBQUM7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFbkMsSUFBSSxRQUFRLEtBQUssYUFBYSxFQUFFO0lBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxzQkFBWSxHQUFFLENBQUMsQ0FBQztDQUN6QjtBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEdBQUc7SUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLEdBQUcsQ0FBQyJ9