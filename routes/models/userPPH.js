const mongoose = require('mongoose');

const userPPHSchema = new mongoose.Schema({
    telegramId: Number,
    pph: Number
});

const UserPPH = mongoose.model('UserPPH', userPPHSchema);

module.exports = UserPPH;