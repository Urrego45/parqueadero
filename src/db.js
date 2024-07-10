import pg from 'pg';

export const pool = new pg.Pool({
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    host: process.env.HOST_DATABASE,
    port: process.env.PORT_DATABASE,
    database: process.env.DATABASE_NAME
})
