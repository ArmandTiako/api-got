"use strict";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { router } from "./routes/authorsRoutes.js";
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use("/api/", router);
app.get("/", (req, res) => {
    res.send("Hello word");
});
export default app;
