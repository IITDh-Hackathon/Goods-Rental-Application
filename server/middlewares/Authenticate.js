import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ message: "You are not authorized" });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: "Invalid token" });
        } else {
            req.user = decodedToken;
            next();
        }
        });
    }
}