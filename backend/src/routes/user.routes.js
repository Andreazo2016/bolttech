import { Router } from "express";
import registerUserController from "../controllers/user/register.js";
import userRegisterParamsValidator from "../validators/user-register-validator.js";

const userRoutes = Router();
userRoutes.post(
  "/register",
  userRegisterParamsValidator,
  registerUserController.execute
);

export default userRoutes;
