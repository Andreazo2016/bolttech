import { Router } from "express";
import createProjectController from "../controllers/project/create.js";
import listProjectController from "../controllers/project/list.js";
import findProjectController from "../controllers/project/find.js";
import deleteProjectController from "../controllers/project/delete.js";
import updateProjectController from "../controllers/project/update.js";
import jwtAuthentication from "../middlewares/jwt-authentication.js";
import createProjectValidator from "../validators/create-task-validator.js";

const projectRoutes = Router();
projectRoutes.post(
  "/",
  jwtAuthentication,
  createProjectValidator,
  createProjectController.execute
);
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
