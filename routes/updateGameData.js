const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    data = req.body;
    console.log(data)

    await updateGameData(data)
    res.json({})
});

async function updateGameData(data) {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO users_data (telegramId, energy, coins, time) VALUES (?, ?, ?, ?)", [data.telegramId, data.energy, data.coins, data.time], function (err) {
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