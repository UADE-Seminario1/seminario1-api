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
    node_env: 'development',
    app: {
        secret: '123',
        port: 9001,
    },
    jwt: {
        expiration: '24h',
    },
    google_auth: {
        client_id: '479477726850-sr8ri901ln1jvsgoitih7p577l2auu07.apps.googleusercontent.com',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUUxQixJQUFNLGFBQWEsR0FBRztJQUNwQixPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUUsd0dBQXdHO1FBQzdHLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsZUFBZSxFQUFFLElBQUk7U0FDdEI7S0FDRjtJQUNELFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLElBQUk7S0FDWDtJQUNELEdBQUcsRUFBRTtRQUNILFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLDBFQUEwRTtRQUNyRixhQUFhLEVBQUUscUNBQXFDO1FBQ3BELGFBQWEsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO0tBQ3hEO0NBQ0YsQ0FBQztBQUVGLFNBQVMsTUFBTTtJQUNiLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLGVBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLGVBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFOUIsT0FBTyxlQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=