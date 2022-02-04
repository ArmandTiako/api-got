"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        publication_date: {
            type: Date,
            default: Date.now,
        },
        number_of_pages: {
            type: Number,
            required: true,
        },
        authors: [
            {
                type: Schema.Types.ObjectId,
                ref: "Authors",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Books = mongoose.model("Books", bookSchema);
