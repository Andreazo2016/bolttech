import express from "express";
import Routers from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(Routers);
export default app;
