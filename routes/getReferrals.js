const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const rows = await getGameData(data.telegramSourceId)
    res.json({'data': rows})
});

async function getGameData(telegramId) {
    console.log(telegramId)
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM referrals_data WHERE telegramSourceId = ?`,[telegramId] , function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    }
    )}
module.exports = router;  