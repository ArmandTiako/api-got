"use strict";
import mongoose from "mongoose";
import { User } from "../../models/user.model.js";

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;

    // Verify if the ID is a valid BSON
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: `ID unknow :${id}`,
        });
    }
    try {
        await User.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    username: username,
                },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        )
            .then((docs) =>
                res.status(200).json({
                    error: null,
                    data: docs,
                })
            )
            .catch((error) =>
                res.status(500).json({
                    message: `Cannot found and update the user with id: ${id}`,
                    error: error,
                })
            );
    } catch (error) {
        res.status(500).json({
            message: `Oups, something went wrong !!! `,
            error: error,
        });
    }
};
