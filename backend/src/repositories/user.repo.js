import pool from " .. /config/db. js";

const findUserByEmail = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    return result.rows[0];
}

const createUser = async ({ name, email, password_hash, role }) => {
    const result = await pool.query("INSERT INTO users (name, email, password_hash, role) VALUES ($1,$2,$3,$4) RETURNING*",
        [name, email, password_hash, role]);
    return result.rows[0];
}

export { findUserByEmail, createUser };