const mongoose = require('mongoose');

const profitPerHourSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true },
    profitPerHour: {type: Number, required: true}
});

module.exports = mongoose.model('ProfitPerHour', profitPerHourSchema)