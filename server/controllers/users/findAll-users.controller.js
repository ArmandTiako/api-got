"use strict";

import { User } from "../../models/user.model.js";

export const findAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find();
        return res.status(200).json({
            error: null,
            message: "Request OK",
            data: allUsers,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong, cannot found all the users",
            error: error,
        });
    }
};
