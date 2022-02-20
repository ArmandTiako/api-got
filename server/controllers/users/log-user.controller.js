import jwt from "jsonwebtoken";
import { User } from "../../models/user.model.js";
import { loginErrors } from "../../utils/errors/loginErrors.js";

// Token creation function
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: maxAge,
    });
};

// Token expiration time : 3 Days
const maxAge = 3 * 24 * 60 * 60 * 1000;

export const logUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge });
        res.status(200).json({
            error: "null",
            message: `User ${user._id} successfull log`,
        });
    } catch (error) {
        const errors = loginErrors(error);
        res.status(400).json({
            message: "Oups, something went wrong ",
            error: errors,
        });
    }
};
