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

            dailyRewardsData = new DailyRewards({
                telegramId: telegramId,
                day1_claimed: 'true',
                day1_date: req.body.date,
                day2_claimed: 'false',
                day2_date: 'false',
                day3_claimed: 'false',
                day3_date: 'false',
                day4_claimed: 'false',
                day4_date: 'false',
                day5_claimed: 'false',
                day5_date: 'false',
                day6_claimed: 'false',
                day6_date: 'false',
                day7_claimed: 'false',
                day7_date: 'false',
                day8_claimed: 'false',
                day8_date: 'false',
                day9_claimed: 'false',
                day9_date: 'false',
                day10_claimed: 'false',
                day10_date: 'false'
            })
        }

        const savedDailyData = await dailyRewardsData.save();
        res.status(200).json(savedDailyData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;