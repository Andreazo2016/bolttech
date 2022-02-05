import { Router } from "express";
import registerUserController from "../controllers/user/register.js";

const userRoutes = Router();
userRoutes.post("/register", registerUserController.execute);

export default userRoutes;
