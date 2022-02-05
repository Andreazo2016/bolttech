import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import projectRoutes from "./project.routes.js";
const routers = Router();

routers.get("/", async (req, res) => {
  return res.json({ alive: true });
});
routers.use("/user", userRoutes);
routers.use("/login", authRoutes);
routers.use("/project", projectRoutes);

export default routers;
