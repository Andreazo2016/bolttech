import { Router } from "express";
import AuthController from "../controllers/auth/authenticate.js";

const authRoutes = Router();
authRoutes.post("/", AuthController.execute);

export default authRoutes;
