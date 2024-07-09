const express = require('express');
const MineCards = require('../models/MineCards');
const router = express.Router();

router.post('/', async (req, res) => {
    const { telegramId } = req.body;
    
    try {
        let cardsData = await MineCards.find({telegramId: telegramId});

        if (cardsData.length == 0) {
            cardsData = new MineCards({
                telegramId: telegramId,
                funTokensBox: 0,
                stakingBox: 0,
                btcPairsBox: 0,
                ethPairsBox: 0,
                top10CMCBox: 0,
                gameFiBox: 0,
                defiBox: 0,
                socialFiBox: 0,
                memeCoinsBox: 0,
                shitCoinsBox: 0
            })
            await cardsData.save();
        } 

        res.status(200).json(cardsData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;