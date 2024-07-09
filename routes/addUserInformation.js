const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { telegramId, telegramUsername, isPremium } = req.body;

    try {
        const userExist = await User.findOne({ telegramId: telegramId });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ telegramId: telegramId, telegramUsername: telegramUsername, isPremium: isPremium });
        await newUser.save();
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;