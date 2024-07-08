const mongoose = require('mongoose');

const referralsSchema = new mongoose.Schema({
    telegramSourceId: { type: Number, required: true },
    telegramReferralId: { type: Number, required: true, },
    clicked: { type: Number, required: true },
    verified: { type: Number, required: true }
});

module.exports = mongoose.model('Referrals', referralsSchema)