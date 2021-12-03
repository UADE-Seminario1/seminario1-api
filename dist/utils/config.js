"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nconf_1 = __importDefault(require("nconf"));
var defaultConfig = {
    mongodb: {
        url: 'mongodb+srv://apilengua:apilengua123@cluster0.wrr50.mongodb.net/seminario1?retryWrites=true&w=majority',
        database: 'seminario1',
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        },
    },
    NODE_ENV: 'development',
    app: {
        SECRET: '123',
        HOST: '0.0.0.0',
        PORT: 9001,
    },
    jwt: {
        expiration: '24h',
    },
    google_auth: {
        client_id: '305599675700-galqqfi6s6cpsqb2j3r39mgksfkm0dg5.apps.googleusercontent.com',
        client_secret: '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',
        redirect_uris: ['http://localhost:9001/oauth2callback'],
    },
};
function config() {
    nconf_1.default.argv();
    nconf_1.default.env({ separator: '_', lowerCase: true });
    nconf_1.default.defaults(defaultConfig);
    return nconf_1.default;
}
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUUxQixJQUFNLGFBQWEsR0FBRztJQUNwQixPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUUsd0dBQXdHO1FBQzdHLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsZUFBZSxFQUFFLElBQUk7U0FDdEI7S0FDRjtJQUNELFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsMEVBQTBFO1FBQ3JGLGFBQWEsRUFBRSxxQ0FBcUM7UUFDcEQsYUFBYSxFQUFFLENBQUMsc0NBQXNDLENBQUM7S0FDeEQ7Q0FDRixDQUFDO0FBRUYsU0FBUyxNQUFNO0lBQ2IsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU5QixPQUFPLGVBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==