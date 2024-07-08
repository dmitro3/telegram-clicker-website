const mongoose = require('mongoose');

const gameDataSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true },
    coins: { type: Number, required: true, },
    energy: { type: Number, required: true },
    time: { type: String, required: true }
});

module.exports = mongoose.model('GameData', gameDataSchema)