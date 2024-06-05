const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const information = await showTable(data.telegramId);
    res.json({data: information})
});

    async function showTable(telegramId) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM users_information WHERE telegramId = ?`, [+telegramId], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        }
        )}
module.exports = router;  