import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        books: [
            {
                type: Schema.Types.ObjectId,
                ref: "Books",
            },
        ],
    },
    { timestamps: true }
);

export const Author = mongoose.model("Authors", authorSchema);
