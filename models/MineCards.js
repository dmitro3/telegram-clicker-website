const mongoose = require('mongoose');

const mineCardsShema = new mongoose.Schema({
    telegramId: { type: Number, required: true },
    funTokensBox: { type: Number, required: true },
    stakingBox: { type: Number, required: true },
    btcPairsBox: { type: Number, required: true },
    ethPairsBox: { type: Number, required: true },
    top10CMCBox: { type: Number, required: true },
    gameFiBox: { type: Number, required: true },
    defiBox: { type: Number, required: true },
    socialFiBox: { type: Number, required: true },
    memeCoinsBox: { type: Number, required: true },
    shitCoinsBox: { type: Number, required: true },
});

module.exports = mongoose.model('MineCards', mineCardsShema)