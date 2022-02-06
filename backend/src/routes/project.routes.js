import { Router } from "express";
import createProjectController from "../controllers/project/create.js";
import listProjectController from "../controllers/project/list.js";
import findProjectController from "../controllers/project/find.js";
import deleteProjectController from "../controllers/project/delete.js";
import updateProjectController from "../controllers/project/update.js";
import jwtAuthentication from "../middlewares/jwt-authentication.js";

const projectRoutes = Router();
projectRoutes.post("/", jwtAuthentication, createProjectController.execute);
projectRoutes.put(
  "/:project_id",
  jwtAuthentication,
  updateProjectController.execute
);
projectRoutes.get("/:project_id", findProjectController.execute);
projectRoutes.get("/", jwtAuthentication, listProjectController.execute);
projectRoutes.delete(
  "/:project_id",
  jwtAuthentication,
  deleteProjectController.execute
);

export default projectRoutes;
