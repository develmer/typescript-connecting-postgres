import { Pool } from "pg";

const pool = new Pool({
    user: process.env.USER || "postgres",
    host: process.env.HOST || "localhost",
    database: process.env.DATABASE || "todo",
    password: process.env.PASSWORD || "1234",
    port: Number(process.env.PORT) || 5432
});

export default pool;