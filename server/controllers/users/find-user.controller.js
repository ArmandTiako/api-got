"use strict";
import mongoose from "mongoose";
import { User } from "../../models/user.model.js";

export const findUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: `ID Unknow :${id}`,
        });
    }
    try {
        let user = await User.findById(id);
        return res.status(200).json({
            error: null,
            message: `User ${id} found`,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong, cannot found user",
            error: error,
        });
    }
};
