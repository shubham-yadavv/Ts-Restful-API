import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const dbUri = config.get("dbUri") as string;
  mongoose
    .connect(dbUri, {})
    .then(() => {
      log.info("Database connection successful");
    })
    .catch((err) => {
      log.error(`Database connection error: ${err.message}`);
      process.exit(1);
    });
}

export default connect;
