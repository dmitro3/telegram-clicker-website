const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const pph = data.pph;
    const telegramId = data.telegramId
    await updateCard(pph, telegramId);
    res.json({});
});

async function updateCard(pph, telegramId) {
    return new Promise((resolve, reject) => {
        const querry = `UPDATE user_pph SET pph = ? WHERE telegramId = ?`
        db.run(querry, [+pph, +telegramId], function (err) {
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