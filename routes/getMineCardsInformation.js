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
        db.all(`SELECT * FROM cards WHERE telegramId = ?`,[telegramId] , function (err, rows) {
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
        db.run("INSERT INTO cards ( funTokensBox, stakingBox, btcPairsBox, ethPairsBox, top10CMCBox, gameFiBox, defiBox, socialFiBox, memeCoinsBox, shitCoinsBox) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [+data.telegramId, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], function (err) {
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