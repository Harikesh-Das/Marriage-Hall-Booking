import { findUserByEmail, createUser } from "../repositories/user.repo.js";
 import { hashPassword, comparePassword } from "../utils/hash.js"; 
 import ROLES from "../constants/roles.js"; 
 import { signToken } from "../utils/jwt.js"; c
 const registerUser = async ({ name, email, password }) => 
    { const checkExistingUser = await findUserByEmail(email); 
        if (checkExistingUser) 
            { const error = new Error("User already exists"); 
                error.statusCode = 409; throw error; 
            } 
            const password_hash = await hashPassword(password); 
            const role = ROLES.USER; 
            const user = await createUser({ name, email, password_hash, role, }); 
            const token = signToken({ id: user.id, email: user.email, role: user.role, }); 
            return { 
                user: { id: user.id, name: user.name, email: user.email, role: user.role, }, token, 
            }; 
        }; 
        const loginUser = async ({ email, password }) => { 
            const user = await findUserByEmail(email); 
            if (!user) { 
                const error = new Error("Email not registered"); 
                error.statusCode = 401; throw error; 
            } 
            const password_verification = await comparePassword(password, user.password_hash,); 
            if (!password_verification) { 
                const error = new Error("Password not correct"); 
                error.statusCode = 401; throw error; 
            } 
            const token = signToken({ id: user.id, email: user.email, role: user.role }); 
            return { 
                user: { id: user.id, name: user.name, email: user.email, role: user.role }, token 
            }; 
        }; 
 export { registerUser, loginUser }