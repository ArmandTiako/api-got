import jwt from "jsonwebtoken";
import { User } from "../../models/user.model.js";

export const logoutUser = async (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};
