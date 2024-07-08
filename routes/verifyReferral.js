const express = require('express');
const router = express.Router();
const Referrals = require('../models/Referrals');

router.post('/', async (req, res) => {
    const { telegramReferralId } = req.body;

    try {
        const updatedReferral = await Referrals.findOneAndUpdate({ telegramReferralId: telegramReferralId }, { verified: 1 }, { new: true });
        if (!updatedReferral) {
            return res.status(404).json({ message: 'Referral not found' });
        }

        res.status(200).json(updatedReferral);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;