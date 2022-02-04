import mongoose from "mongoose";
import { isEmail } from "validator";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [isEmail, "Email format is invalid"],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
});
