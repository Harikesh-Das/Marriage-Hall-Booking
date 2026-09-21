import env from " .. /config/env. js";
import jwt from "jsonwebtoken";

const signToken = ({ id, email, role }) => {
    const jwtKey = env.jwt.secret;
    const payload = { id, email, role };
    const token = jwt.sign(payload, jwtKey, { expiresIn: "1h" });
    return token;
}
const verifyToken = (token) => {
    const jwtKey = env.jwt.secret;
    const result = jwt.verify(token, jwtKey);
    return result;
}
export { signToken, verifyToken };