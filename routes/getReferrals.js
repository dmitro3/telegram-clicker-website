const express = require('express');
const router = express.Router();
const Referrals = require('../models/Referrals');

router.post('/', async (req, res) => {
    const { telegramSourceId } = req.body;
    
    try {
        const referralData = await Referrals.find({telegramSourceId: telegramSourceId});
        res.status(200).json(referralData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;