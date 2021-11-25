module.exports = async () => {
    return {
      changelogCollectionName: "migrations",
      migrationsDir: "src/migrations",
      defaultTemplate: "typescript",
      outDir: "./.xmigrate",
      typescript: true,
      logger: {
        folder: "./migrations-log",
        up: {
          success: "up.success.log",
          error: "up.error.log",
        },
        down: {
          success: "down.success.log",
          error: "down.error.log",
        },
      },
      mongodb: {
        url: process.env.MONGODB_URL || "mongodb+srv://apilengua:apilengua123@cluster0-wrr50.mongodb.net",
        databaseName: "seminario1",
        options: {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          w: "majority",
          retryWrites: true,
        },
      },
    };
  };