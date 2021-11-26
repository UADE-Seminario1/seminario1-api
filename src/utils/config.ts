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
};

function config(): nconf.Provider {
  nconf.argv();
  nconf.env({ separator: '_', lowerCase: true });
  nconf.defaults(defaultConfig);

  return nconf;
}

export default config;
