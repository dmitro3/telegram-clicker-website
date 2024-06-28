const express = require('express');
const router = express.Router();
const UserPPH = require('../models/UserPPH');

// GET route to fetch user PPH by telegramId
router.get('/:telegramId', async (req, res, next) => {
    const { telegramId } = req.params;

    try {
        const userPPH = await UserPPH.findOne({ telegramId: telegramId });
        if (userPPH) {
            res.status(200).json(userPPH);
        } else {
            res.status(404).json({ message: 'User PPH not found' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;