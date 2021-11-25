"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nconf_1 = __importDefault(require("nconf"));
var defaultConfig = {
    mongodb: {
        url: "mongodb+srv://apilengua:apilengua123@cluster0-wrr50.mongodb.net",
        database: "seminario1",
    },
    node_env: "development",
    app: {
        secret: "123",
        port: 9001,
    },
    jwt: {
        expiration: "24h",
    },
};
function config() {
    nconf_1.default.argv();
    nconf_1.default.env({ separator: "_", lowerCase: true });
    nconf_1.default.defaults(defaultConfig);
    return nconf_1.default;
}
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUUxQixJQUFNLGFBQWEsR0FBRztJQUNwQixPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUUsaUVBQWlFO1FBQ3RFLFFBQVEsRUFBRSxZQUFZO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDO0FBRUYsU0FBUyxNQUFNO0lBQ2IsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU5QixPQUFPLGVBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==