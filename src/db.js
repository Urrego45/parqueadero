import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'parqueadero'
})
