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
            dailyRewardsData[`day${day+1}_claimed`] = 'true';
            dailyRewardsData[`day${day+1}_claimed`] = req.body.date;
        } else {
            dailyRewardsData.day1_claimed = 'true';
            dailyRewardsData.day1_claimed = req.body.date;

            dailyRewardsData.day2_claimed = 'false';
            dailyRewardsData.day2_claimed = 'false';

            dailyRewardsData.day3_claimed = 'false';
            dailyRewardsData.day3_claimed = 'false';

            dailyRewardsData.day4_claimed = 'false';
            dailyRewardsData.day4_claimed = 'false';

            dailyRewardsData.day5_claimed = 'false';
            dailyRewardsData.day5_claimed = 'false';

            dailyRewardsData.day6_claimed = 'false';
            dailyRewardsData.day6_claimed = 'false';

            dailyRewardsData.day7_claimed = 'false';
            dailyRewardsData.day7_claimed = 'false';

            dailyRewardsData.day8_claimed = 'false';
            dailyRewardsData.day8_claimed = 'false';

            dailyRewardsData.day9_claimed = 'false';
            dailyRewardsData.day9_claimed = 'false';

            dailyRewardsData.day10_claimed = 'false';
            dailyRewardsData.day10_claimed = 'false';
        }

        const savedDailyData = await dailyRewardsData.save();
        res.status(200).json(savedDailyData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;