const express = require('express');
const router = express.Router();
const GameData = require('../models/GameData');

// POST route to insert or update game data
router.post('/', async (req, res) => {
    const { telegramId } = req.body;

    try {
        let gameData = await GameData.findOne({ telegramId });

        if (gameData) {
            // Update existing record
            gameData.coins = req.body.coins;
            gameData.energy = req.body.energy;
            gameData.time = req.body.time;
        } else {
            // Insert new record
            gameData = new GameData({
                telegramId: req.body.telegramId,
                coins: req.body.coins,
                energy: req.body.energy,
                time: req.body.time
            });
        }

        const savedGameData = await gameData.save();
        res.status(200).json(savedGameData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;