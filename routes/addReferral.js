const express = require('express');
const router = express.Router();
const Referrals = require('../models/Referrals');

router.post('/', async (req, res) => {
    const { telegramSourceId, telegramReferralId, clicked, verified } = req.body;

    try {
        const referralExist = await Referrals.findOne({ telegramReferralId: telegramReferralId });
        if (referralExist) {
            return res.status(400).json({ message: 'Referral already exists' });
        }
        const newReferral = new Referrals({ telegramSourceId: telegramSourceId, telegramReferralId: telegramReferralId, clicked: clicked, verified: verified });
        await newReferral.save();
        res.status(200).json(newReferral)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;