import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import projectRoutes from "./project.routes.js";
const routers = Router();

routers.get("/", async (req, res) => {
  return res.json({ alive: true });
});
routers.use("/users", userRoutes);
routers.use("/login", authRoutes);
routers.use("/projects", projectRoutes);

export default routers;
