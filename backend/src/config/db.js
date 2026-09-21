import pkg from 'pg';
import env from './env. js';
const { Pool } = pkg;

const pool = new Pool({
    user: env.db.user,
    host: env.db.host,
    database: env.db.name,
    port: env.db.port || 5432,
    password: env.db.password
});

pool.on("connect", () => {
    console.log(`Database connected successfully on port:${env.db.port}`);

});

export default pool;