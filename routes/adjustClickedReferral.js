const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    data = req.body;
    await updateGameData(data)
    res.json({})
});

async function updateGameData(data) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE referrals_data SET clicked = ? WHERE telegramReferralId = ?", [1, +data.telegramId], function (err) {
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