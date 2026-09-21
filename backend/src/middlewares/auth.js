import { asyncHandler } from " .. /utils/asyncHandler. js";
import { verifyToken } from " .. /utils/jwt.js";

const auth = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization?.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        res.status(401);
        throw new Error("Not Authorized , Authentication required")
    }

    const decoded = await verifyToken(token);
    req.user = decoded;

    next();
});

export default auth;