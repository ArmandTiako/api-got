import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minlength: 3,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            validate: [isEmail, "email format is invalid"],
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },
    },
    { timestamps: true }
);

/** function to play before save, to salt the password
 *  we don't use arrow function here coz we need to use "this" */
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Comparing Password after salting
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const pwd = await bcrypt.compare(password, user.password);
        if (pwd) {
            return user;
        }
        throw Error("Invalid !!! Check the password again");
    }
    throw Error("Invalid !!! Check the email again");
};

export const User = mongoose.model("Users", userSchema);
