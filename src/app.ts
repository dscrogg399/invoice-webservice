import express from "express";
import { Routes } from "./interfaces/routes.interface";
import { ErrorMiddleware } from "./middleware/error.middleware";
import path from "path";
import morgan from "morgan";
import { logger, stream } from "./utils/logger";

export class App {
  public app: express.Application;
  public env: string;
  public port: number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = Number(process.env.PORT) || 8000;
    this.env = process.env.NODE_ENV || "development";

    this.app.set("view engine", "ejs");
    this.app.set("views", path.join(__dirname, "/views"));
    this.app.use(express.static("public"));

    this.initMiddlewares();
    this.initRoutes(routes);
    this.initErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  private initMiddlewares() {
    this.app.use(morgan(process.env.LOG_FORMAT || "dev", { stream }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}
