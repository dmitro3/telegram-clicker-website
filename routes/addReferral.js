const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const information = await getDBrows(+data.refTelegramId);
    if (information.length == 0) {
        await addUser(data);
        res.json({data: "User added"})
    } else {
        res.json({data: "User was already in database"})
    }
});

async function addReferral(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO referrals_data (telegramSourceId, telegramReferralId, clicked, verified) VALUES (?, ?, ?, ?)", [+data.srcTelegramId, +data.refTelegramId, 0, 0], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
    )}
    
    async function getDBrows(telegramId) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM referrals_data WHERE telegramReferralId = ?`,[+telegramId] , function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        }
        )}
module.exports = router;