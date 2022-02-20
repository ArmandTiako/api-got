"use strict";
import { User } from "../../models/user.model.js";
import { signUpErrors } from "../../utils/errors/signUpErrors.js";

export const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let newUser = await User.create({ username, email, password });
        res.status(201).json({
            error: null,
            message: `User :${username} successfully created`,
        });
        return newUser;
    } catch (error) {
        const errors = signUpErrors(error);
        res.status(400).json({
            message: "Cannot create new User, Something went wrong",
            errors,
        });
    }
};
