const express = require('express');
const router = express.Router();
const GameData = require('../models/GameData');

router.post('/', async (req, res) => {
    const { telegramId } = req.body;
    
    try {
        const gameData = await GameData.findOne({ telegramId: telegramId });

        if (!gameData) {
            return res.status(404).json({ message: 'Game data not found' });
        }

        res.json(gameData);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;