export const authorizeUser = (role) => {
    return (req, res, next) => {
        console.log(role,req.user.role);
        if (req.user.role == role) {
            next();
        } else {
            res.status(403).json({ message: "You are not authorized" });
        }
    }
}