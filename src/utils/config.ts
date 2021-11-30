import nconf from 'nconf';

const defaultConfig = {
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

function config(): nconf.Provider {
  nconf.argv();
  nconf.env({ separator: '_', lowerCase: true });
  nconf.defaults(defaultConfig);

  return nconf;
}

export default config;
