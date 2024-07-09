/*
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
        db.all(`SELECT * FROM user_pph WHERE telegramId = ?`,[+telegramId] , function (err, rows) {
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
        db.run("INSERT INTO user_pph (telegramId, pph) VALUES (?, ?)", [+data.telegramId, 0], function (err) {
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
*/

const express = require('express');
const ProfitPerHour = require('../models/ProfitPerHour');
const router = express.Router();

router.post('/', async (req, res) => {
    const { telegramId } = req.body;
    
    try {
        const profitPerHourData = await ProfitPerHour.find({telegramId: telegramId});
        res.status(200).json(profitPerHourData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;