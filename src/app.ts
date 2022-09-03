import express from "express";
import config from "config";
import log from "./logger";
import connect from "./database/connect";
import userRoutes from "./routes/user.routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

userRoutes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, () => {
  log.info(`Server is running on http://${host}:${port}`);
  connect();
  
});
