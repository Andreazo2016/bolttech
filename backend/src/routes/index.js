import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
const routers = Router();

routers.get("/", async (req, res) => {
  return res.json({ alive: true });
});
routers.use("/user", userRoutes);
routers.use("/login", authRoutes);

export default routers;
