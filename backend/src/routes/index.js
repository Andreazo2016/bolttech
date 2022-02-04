import { Router } from "express";
import userRoutes from "./user.routes.js";
const routers = Router();

routers.get("/", async (req, res) => {
  return res.json({ alive: true });
});
routers.use("/user", userRoutes);

export default routers;
