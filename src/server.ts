import { App } from "./app";
import { WebRoute } from "./routes/web.route";
import { ApiRoute } from "./routes/api.route";
require("dotenv").config();

const app = new App([new WebRoute(), new ApiRoute()]);

app.listen();

export default app;
