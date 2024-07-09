const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { telegramId } = req.body;
    
    try {
        const userData = await User.find({telegramId: telegramId});
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;