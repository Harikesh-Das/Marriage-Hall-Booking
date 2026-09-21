import { asyncHandler } from " .. /utils/asyncHandler. js";
import apiResponse from " .. /utils/apiResponse.js";
import { registerSchema, loginSchema } from " .. /validators/auth. validators. js";
import { registerUser, loginUser } from " .. /services/auth. service.js";

const register = asyncHandler(async (req, res) => {
    const data = registerSchema.parse(req.body);
    const validated = await registerUser(data);

    const statuscode = 201;
    const message = "User registered successfully ";
    return apiResponse.successHelp(res, statuscode, message, validated);
});

const login = asyncHandler(async (req, res) => {
    const data = loginSchema.parse(req.body);
    const validated = await loginUser(data);
    const statuscode = 200;
    const message = "Login successful";
    return apiResponse.successHelp(res, statuscode, message, validated);
});

export { register, login };