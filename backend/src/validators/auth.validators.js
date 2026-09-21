import { z } from "zod";

const registerSchema = z.object({
    name: z.string().min(3, "Name should be minimum of 3 characters"),
    email: z.email("Invalid Email"),
    password: z.string().min(8, "Minimum length of password should be 8 characters.")
});

const loginSchema = z.object({
    email: z.email("Invalid Email"),
    password: z.string().min(8, "Minimum length of password should be 8 characters.")
});

export { registerSchema, loginSchema };