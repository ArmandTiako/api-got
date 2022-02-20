import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const checkAuth = async (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(`Token: ${token}`);
    if (token) {
        console.log(token);
        jwt.verify(token, process.env.SECRET_TOKEN, async (err, docsToken) => {
            if (err) {
                console.log("erreur détectée");
                console.log(res.locals.user);
                res.locals.user = null;
                res.cookie("jwt", "", { maxAge: 1 });
                next();
            } else {
                let user = await User.findById(docsToken.id);
                res.locals.user = user;
                console.log(user);
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};
