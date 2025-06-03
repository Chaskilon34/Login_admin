import musql from 'mysql2/promise';

export const pool = musql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mi_app",
    waitForConnections: true,
    connectionLimit: 10,
});

