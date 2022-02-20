"use strict";
import mongoose from "mongoose";
import { User } from "../../models/user.model.js";

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: `Oups, something went wrong !!! Cannot found id: ${id}`,
        });
    }
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            error: null,
            message: `User ${id} successfully deleted`,
        });
    } catch (error) {
        res.status(500).json({
            message: "Oups, something went wrong !!!",
            error: error,
        });
    }
};
