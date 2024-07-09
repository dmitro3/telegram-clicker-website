const mongoose = require('mongoose');

const dailyRewardsSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true },
    day1_claimed: {type: String, required: true},
    day1_date: {type: String, required: true},

    day2_claimed: {type: String, required: true},
    day2_date: {type: String, required: true},

    day3_claimed: {type: String, required: true},
    day3_date: {type: String, required: true},

    day4_claimed: {type: String, required: true},
    day4_date: {type: String, required: true},

    day5_claimed: {type: String, required: true},
    day5_date: {type: String, required: true},

    day6_claimed: {type: String, required: true},
    day6_date: {type: String, required: true},

    day7_claimed: {type: String, required: true},
    day7_date: {type: String, required: true},

    day8_claimed: {type: String, required: true},
    day8_date: {type: String, required: true},

    day9_claimed: {type: String, required: true},
    day9_date: {type: String, required: true},

    day10_claimed: {type: String, required: true},
    day10_date: {type: String, required: true},
});

module.exports = mongoose.model('DailyRewards', dailyRewardsSchema)