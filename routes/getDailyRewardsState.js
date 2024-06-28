const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const information = await getUserDailyRewards(data.telegramId);
    console.log(information)
    if (information.length == 0) {
        await addUser(data);
    }
    res.json({data: information})
});

async function getUserDailyRewards(telegramId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM daily_rewards WHERE telegramId = ?`,[telegramId] , function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    }
    )}

    async function addUser(data) {
        return new Promise((resolve, reject) => {
            db.run("INSERT INTO daily_rewards (telegramId, day1_claimed, day1_date, day2_claimed, day2_date, day3_claimed, day3_date, day4_claimed, day4_date, day5_claimed, day5_date, day6_claimed, day6_date, day7_claimed, day7_date, day8_claimed, day8_date, day9_claimed, day9_date, day10_claimed, day10_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [+data.telegramId, 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false','false', 'false', 'false', 'false', 'false','false', 'false', 'false', 'false', 'false',], function (err) {
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