import { asyncHandler } from " .. /utils/asyncHandler.js";
const authorize = (...roles) => {
    return asyncHandler((req, res, next) => {
        if (!req.user) {
            res.status(401);
            throw new Error("Authentication Required");
        }

        if (!roles.includes(req.user.role)) {
            res.status(403);
            throw new Error("You do not have permission to perform this action");
        }

        next();
    });

}

export default authorize;