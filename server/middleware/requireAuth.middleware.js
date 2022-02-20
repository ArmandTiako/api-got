import jwt from "jsonwebtoken";

export const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN, async (err, docsDecodedToken) => {
            if (err) {
                console.log(err);
            } else {
                console.log(docsDecodedToken.id);
                res.status(200).json({
                    error: null,
                    data: res.locals.user._id,
                    message: `User ${res.locals.user._id} is log`,
                });
                next();
            }
        });
    } else {
        console.log("No Token provided");
    }
};
