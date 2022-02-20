"use strict";
import mongoose from "mongoose";
import { Author } from "../../models/author.model.js";

export const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    // Verify if the ID is a valid BSON
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json("ID unknow:" + id);
    }
    try {
        await Author.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name: name,
                },
            },
            { new: true, upsert: true, setDefaultOnInsert: true }
        )
            .then((docs) => res.send(docs))
            .catch((error) => res.status(500).json({ message: error }));
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
