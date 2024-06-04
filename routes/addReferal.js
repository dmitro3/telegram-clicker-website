const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    data = req.body;
    await addReferral(data)
    res.json({})
});

async function addReferral(data) {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO referrals (telegramSourceId, telegramReferralId, clicked) VALUES (?, ?, ?)", [+data.sourceTelegramId, +data.referralTelegramId, 0], function (err) {
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