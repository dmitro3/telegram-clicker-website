const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    await updateDay(data)
    res.json({})
});

async function updateDay(data) {
    return new Promise((resolve, reject) => {
        const querry = `UPDATE daily_rewards SET day${data.day}_claimed = ?, day${data.day}_date = ? WHERE telegramId = ?`
        db.run(querry, ['true', data.date, +data.telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

module.exports = router;