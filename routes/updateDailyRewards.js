const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    try {
        await updateDay(data);
        res.json({});
    } catch (err) {
        next(err);
    }
});

async function updateDay(data, retries = 5) {
    const query = `UPDATE daily_rewards SET day${data.day}_claimed = ?, day${data.day}_date = ? WHERE telegramId = ?`;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await runQuery(query, ['true', data.date, +data.telegramId]);
            return;
        } catch (err) {
            if (err.code === 'SQLITE_BUSY' && attempt < retries) {
                console.warn(`Database is busy. Retrying attempt ${attempt} of ${retries}...`);
                await delay(100); // wait for 100ms before retrying
            } else {
                console.error("Error inserting data:", err.message);
                throw err;
            }
        }
    }
}

function runQuery(query, params) {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = router;