import { Router } from "express";
import registerUserController from "../controllers/user/registre.js";

const userRoutes = Router();
userRoutes.get("/resgister", registerUserController.execute);

export default userRoutes;
