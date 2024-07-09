const express = require('express');
const MineCards = require('../models/MineCards');
const router = express.Router();

router.post('/', async (req, res) => {
    const { telegramId } = req.body;
    
    try {
        const cardsData = await MineCards.find({telegramId: telegramId});
        res.status(200).json(cardsData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;