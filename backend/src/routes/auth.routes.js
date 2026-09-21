import express from "express";
import { register, login } from " .. /controllers/auth.controller.js"
import auth from " .. /middlewares/auth. js";
import apiResponse from " .. /utils/apiResponse.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/me", auth, (req, res) => {
    apiResponse.successHelp(res, 200, "User fetched successfully ", req.user)
});

export default authRoutes;