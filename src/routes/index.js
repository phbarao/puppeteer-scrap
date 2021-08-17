import { Router } from "express";

import PricesController from "../controllers/PricesController.js";

const routes = Router();

routes.get("/", PricesController.index);

export default routes;
