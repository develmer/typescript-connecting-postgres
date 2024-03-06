import express, { Application } from "express";
import pool from "./db";

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM duty');
        client.release();
        if (res) res.json(result.rows);
    } catch (error) {
        console.log('error');
        res.status(500).json({
            error: "Internal server error.",
            message: "Error executing query"
        })
    }
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});