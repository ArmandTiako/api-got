"use strict";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { checkAuth } from "./middleware/checkAuth.middleware.js";
import { requireAuth } from "./middleware/requireAuth.middleware.js";
import { authorRouter } from "./routes/authorsRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

// Jwt
app.get("*", checkAuth);
app.get("/jwtid", requireAuth);

// Routes
app.use("/api/author/", authorRouter);
app.use("/api/user/", userRouter);

app.get("/", (req, res) => {
    res.send("Hello word");
});
export default app;
