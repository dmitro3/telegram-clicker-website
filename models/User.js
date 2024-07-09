const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true },
    telegramUsername: { type: String, required: true, },
    isPremium: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', userSchema)