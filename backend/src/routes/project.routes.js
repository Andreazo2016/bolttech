import { Router } from "express";
import createUserController from "../controllers/project/create.js";
import listUserController from "../controllers/project/list.js";
import findUserController from "../controllers/project/find.js";

const projectRoutes = Router();
projectRoutes.post("/", createUserController.execute);
projectRoutes.get("/:project_id", findUserController.execute);
projectRoutes.get("/listByUser/:user_id", listUserController.execute);

export default projectRoutes;
