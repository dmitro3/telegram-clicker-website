const express = require('express');
const DailyRewards = require('../models/DailyRewards');
const router = express.Router();

// POST route to insert or update game data
router.post('/', async (req, res) => {
    const { telegramId, day } = req.body;

    try {
        let dailyRewardsData = await DailyRewards.findOne({ telegramId });

        if (dailyRewardsData) {
            // Update existing record
            dailyRewardsData[`day${day}_claimed`] = 'true';
            dailyRewardsData[`day${day}_claimed`] = req.body.date;
        }

        const savedDailyData = await dailyRewardsData.save();
        res.status(200).json(savedDailyData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;