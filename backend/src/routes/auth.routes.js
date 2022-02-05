import { Router } from "express";
import AuthController from "../controllers/auth/authenticate.js";
import loginUserParamsValidator from "../validators/user-login-validator.js";
const authRoutes = Router();
authRoutes.post("/", loginUserParamsValidator, AuthController.execute);

export default authRoutes;
