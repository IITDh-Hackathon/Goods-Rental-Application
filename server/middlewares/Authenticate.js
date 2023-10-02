import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ message: "Please login to continue!!" });
    } else {
        token = token.split(" ")[1].trim();
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: "Please login again!!" });
        } else {
            req.user = decodedToken;
            next();
        }
        });
    }
}