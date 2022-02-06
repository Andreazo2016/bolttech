import { Router } from "express";
import createProjectController from "../controllers/project/create.js";
import listUserController from "../controllers/project/list.js";
import findUserController from "../controllers/project/find.js";
import jwtAuthentication from "../middlewares/jwt-authentication.js";

const projectRoutes = Router();
projectRoutes.post("/", jwtAuthentication, createProjectController.execute);
projectRoutes.get("/:project_id", findUserController.execute);
projectRoutes.get("/", jwtAuthentication, listUserController.execute);

export default projectRoutes;
