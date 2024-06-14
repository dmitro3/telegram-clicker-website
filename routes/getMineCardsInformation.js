const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const information = await getMineCardsData(data.telegramId);
    if (information.length == 0) {
        await addUser(data);
        res.json({data: "User added"})
    } else {
        res.json({data: information})
    }
});

async function getMineCardsData(telegramId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM mine_cards WHERE telegramId = ?`,[telegramId] , function (err, rows) {
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
        db.run("INSERT INTO mine_cards (telegramId, funTokens_level, staking_level, btcPairs_level, ethPairs_level, top10_level, gameFi_level, defi_level, socialFi_level, meme_level, shit_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [+data.telegramId, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], function (err) {
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