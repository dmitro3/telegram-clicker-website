const express = require('express');
const router = express.Router();
const MineCards = require('../models/GameData');

// POST route to insert or update game data
router.post('/', async (req, res) => {
    const { telegramId, cardId, level } = req.body;

    try {
        let cardsData = await MineCards.findOne({ telegramId });

        if (cardsData) {
            cardsData[cardId] = +level;
        } else {
            cardData = new MineCards({
                telegramId: req.body.telegramId,
                funTokensBox: 0,
                stakingBox: 0,
                btcPairsBox: 0,
                ethPartsBox: 0,
                top10CMCBox: 0,
                gameFiBox: 0,
                defiBox: 0,
                socialFiBox: 0,
                memeCoinsBox: 0,
                shitCoinsBox: 0
            });
            cardData[cardId] = +level;
        }

        const savedGameData = await cardData.save();
        res.status(200).json(savedGameData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;