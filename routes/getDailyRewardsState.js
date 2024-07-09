const express = require('express');
const DailyRewards = require('../models/DailyRewards');
const router = express.Router();

router.post('/', async (req, res) => {
    const { telegramId } = req.body;
    
    try {
        const daysData = await DailyRewards.find({telegramId: telegramId});
        res.status(200).json(daysData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;