import { Router } from "express";
import createTaskController from "../controllers/task/create.js";
import finishTaskController from "../controllers/task/finish.js";
import findTaskController from "../controllers/task/find.js";
import deleteTaskController from "../controllers/task/delete.js";
import updateTaskController from "../controllers/task/update.js";
import listTaskController from "../controllers/task/list.js";
import jwtAuthentication from "../middlewares/jwt-authentication.js";
import createTaskValidator from "../validators/create-task-validator.js";

const taskRoutes = Router();
taskRoutes.post(
  "/",
  jwtAuthentication,
  createTaskValidator,
  createTaskController.execute
);
taskRoutes.post("/finish", jwtAuthentication, finishTaskController.execute);
taskRoutes.put("/:task_id", jwtAuthentication, updateTaskController.execute);
taskRoutes.get("/:task_id", findTaskController.execute);
taskRoutes.get("/", listTaskController.execute);
taskRoutes.delete("/:task_id", jwtAuthentication, deleteTaskController.execute);

export default taskRoutes;
