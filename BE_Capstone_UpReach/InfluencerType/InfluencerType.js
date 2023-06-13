import { config } from '../dbconfig';
import express from "express";
import sql from "mssql";


const InfluencerType = express.Router();

//connect to your database
const pool = new sql.ConnectionPool(config);

//get api InfluencerType
InfluencerType.get('/api/InfluencerType', async (req, res) => {
    try {
        console.log('Querying database...');
        pool.connect(config);
        const result = await pool.query('SELECT * FROM InfluencerType');
        console.log('Result:', result.recordset);
        res.send(result.recordset);
    } catch (err) {
        console.log('Error:', err);
        res.sendStatus(500);
    }
});

export { InfluencerType };