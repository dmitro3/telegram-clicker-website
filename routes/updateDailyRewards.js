const express = require('express');
const DailyRewards = require('../models/DailyRewards');
const router = express.Router();

// POST route to insert or update game data
router.post('/', async (req, res) => {
    const { telegramId, day, date } = req.body;
    try {
        let dailyRewardsData = await DailyRewards.findOne({ telegramId: telegramId });

        if (dailyRewardsData) {
            // Update existing record
            if (+day == 2) {
                dailyRewardsData.day2_claimed = 'true';
                dailyRewardsData.day2_date = date;
            } else if (+day == 3) {
                dailyRewardsData.day3_claimed = 'true';
                dailyRewardsData.day3_date = date;
            } else if (+day == 4) {
                dailyRewardsData.day4_claimed = 'true';
                dailyRewardsData.day4_date = date;
            } else if (+day == 5) {
                dailyRewardsData.day5_claimed = 'true';
                dailyRewardsData.day5_date = date;
            } else if (+day == 6) {
                dailyRewardsData.day6_claimed = 'true';
                dailyRewardsData.day6_date = date;
            } else if (+day == 7) {
                dailyRewardsData.day7_claimed = 'true';
                dailyRewardsData.day7_date = date;
            } else if (+day == 8) {
                dailyRewardsData.day8_claimed = 'true';
                dailyRewardsData.day8_date = date;
            } else if (+day == 9) {
                dailyRewardsData.day9_claimed = 'true';
                dailyRewardsData.day9_date = date;
            } else if (+day == 10) {
                dailyRewardsData.day10_claimed = 'true';
                dailyRewardsData.day10_date = date;
            } 
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