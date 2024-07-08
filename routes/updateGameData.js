const express = require('express');
const router = express.Router();
const GameData = require('../models/GameData');

router.post('/', async (req, res) => {
    try {
        const gameData = new GameData(req.body);
        const savedGameData = await gameData.save();
        res.status(201).json(savedGameData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;