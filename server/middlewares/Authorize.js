export const authorizeUser = (roles) => {
    return (req, res, next) => {
        let user = req.user;
        if (user && roles.includes(user.role)) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}