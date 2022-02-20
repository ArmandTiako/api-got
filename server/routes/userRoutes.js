import express from "express";
import { signUp } from "../controllers/users/signUp.controller.js";
import { deleteUser } from "../controllers/users/deleteOne-user.controller.js";
import { findUser } from "../controllers/users/find-user.controller.js";
import { findAllUsers } from "../controllers/users/findAll-users.controller.js";
import { logUser } from "../controllers/users/log-user.controller.js";
import { updateUser } from "../controllers/users/update-user.controller.js";
import { logoutUser } from "../controllers/users/logout-user.controller.js";

const userRouter = express.Router();

// User's Authentication routes
userRouter.post("/signup", signUp);
userRouter.post("/login", logUser);
userRouter.get("/logout", logoutUser);

// Other user's routes
userRouter.get("/allusers", findAllUsers);
userRouter.get("/:id", findUser);
userRouter.delete("/:id", deleteUser);
userRouter.patch("/:id", updateUser);

export { userRouter };
