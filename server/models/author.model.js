import mongoose from "mongoose";

const Schema = mongoose.Schema

 const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Books'
        }
    ]
})

export const authorModel =mongoose.model("Authors", authorSchema)