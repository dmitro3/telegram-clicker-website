/*
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const pph = data.pph;
    const telegramId = data.telegramId;
    try {
        await updateCard(pph, telegramId);
        res.json({ success: true });
    } catch (err) {
        console.error("Error updating card:", err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

async function updateCard(pph, telegramId) {
    const query = `UPDATE user_pph SET pph = ? WHERE telegramId = ?`;
    const params = [+pph, +telegramId];

    return new Promise((resolve, reject) => {
        const attemptUpdate = () => {
            db.run(query, params, function(err) {
                if (err) {
                    if (err.code === 'SQLITE_BUSY') {
                        console.log('Database is busy, retrying...');
                        setTimeout(attemptUpdate, 100); 
                    } else {
                        console.error('Error updating card:', err.message);
                        reject(err);
                    }
                } else {
                    resolve();
                }
            });
        };

        attemptUpdate();
    });
}

module.exports = router;
*/

const express = require('express');
const ProfitPerHour = require('../models/ProfitPerHour');
const router = express.Router();

// POST route to insert or update game data
router.post('/', async (req, res) => {
    const { telegramId } = req.body;

    try {
        let profitPerHourData = await ProfitPerHour.findOne({ telegramId });

        if (profitPerHourData) {
            // Update existing record
            profitPerHourData.profitPerHour = req.body.pph;

        } else {
            // Insert new record
            profitPerHourData = new ProfitPerHour({
                telegramId: req.body.telegramId,
                profitPerHour: req.body.pph                
            });
        }

        const savedProfitPerHourData = await profitPerHourData.save();
        res.status(200).json(savedProfitPerHourData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;