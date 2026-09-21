function required(name) {
    const value = process.env[name];
    if (!value) throw new Error(`Missing env variable: ${name}`);
    return value;
}

const env = {
    port: Number(process.env.PORT) || 3000,
    db: {
        user: required('DB_USER'),
        host: required('DB_HOST'),
        name: required('DB_NAME'),
        port: Number(process.env.DB_PORT) || 5432,
        password: process.env.DB_PASSWORD || ''
    },
    jwt: {
        secret: required('JWT_SECRET')

    }

}

export default env;