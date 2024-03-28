import express from "express";
import { routes } from "./routes";
import cors from "cors";
import dotenv from "dotenv";
import config from "./environments/env";
import { DatabaseConfig } from "./infrastructure/database/database.config";
import { LoginService } from "./modules/login/login.service";

async function bootstrap() {
  const app = express();
  const loginService = new LoginService();
  const db = new DatabaseConfig();

  dotenv.config();

  Object.keys(config).forEach((key) => {
    process.env[key] = config[key];
  });

  app.use(cors());

  db.connectDb();

  app.use(express.json());

  app.use(routes);

  app.listen(process.env.APP_PORT, () => console.log("Server is running"));

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

  loginService.getUsers();
}

bootstrap();
