/*
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const telegramId = data.telegramId;
    const cardId = data.cardId;
    const level = data.level;
    await updateCard(telegramId, cardId, level);
    res.json({});
});

async function updateCard(telegramId, cardId, level) {
    return new Promise((resolve, reject) => {
        const querry = `UPDATE cards SET ${cardId} = ? WHERE telegramId = ?`
        db.run(querry, [+level, +telegramId], function (err) {
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
const MineCards = require('../models/MineCards');
const router = express.Router();

// POST route to insert or update game data
router.post('/', async (req, res) => {
    const { telegramId, cardId, level } = req.body;

    try {
        let mineCards = await MineCards.findOne({ telegramId });

        mineCards[cardId] = +level;

        const savedMineCards = await MineCards.save();
        res.status(200).json(savedMineCards);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;