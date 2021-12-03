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

function config(): nconf.Provider {
  nconf.argv();
  nconf.env({ separator: '_', lowerCase: true });
  nconf.defaults(defaultConfig);

  return nconf;
}

export default config;
