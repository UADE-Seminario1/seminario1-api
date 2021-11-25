import nconf from "nconf";

const defaultConfig = {
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

function config(): nconf.Provider {
  nconf.argv();
  nconf.env({ separator: "_", lowerCase: true });
  nconf.defaults(defaultConfig);

  return nconf;
}

export default config;