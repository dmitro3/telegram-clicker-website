const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    data = req.body;
    const boxIds = [
        'funTokensBox', 'stakingBox', 'btcPairsBox', 'ethPairsBox', 'top10CMCBox',
        'gameFiBox', 'defiBox', 'socialFiBox', 'memeCoinsBox', 'shitCoinsBox'
    ]
    const telegramId = data.telegramId;
    const level = data.level;
    const cardId = data.cardId;
    const updateFunctions = [
        (level, telegramId) => updateFunTokens(level, telegramId),
        (level, telegramId) => updateStaking(level, telegramId),
        (level, telegramId) => updateBTCPairsBox(level, telegramId),
        (level, telegramId) => updateETHPairsBox(level, telegramId),
        (level, telegramId) => updateTop10CMCBox(level, telegramId),
        (level, telegramId) => updateGameFiBox(level, telegramId),
        (level, telegramId) => updateDefiBox(level, telegramId),
        (level, telegramId) => updateSocialFiBox(level, telegramId),
        (level, telegramId) => updateMemeCoinsBox(level, telegramId),
        (level, telegramId) => updateShitCoinsBox(level, telegramId),
    ];

    async function executeSpecificFunction(i, level, telegramId) {
        await updateFunctions[i](level, telegramId);
    }

    let index;
    for (let i = 0; i < boxIds.length; i++) {
        if (cardId == boxIds[i]) {
            index = i;
            break;
        };
    };

    await executeSpecificFunction(index, level, telegramId);

    res.json({})
});

async function updateFunTokens(level, telegramId) {
    console.log(level, telegramId)
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET funTokens_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateStaking(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET staking_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateBTCPairsBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET btcPairs_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateETHPairsBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET ethPairs_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateTop10CMCBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET top10_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateGameFiBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET gameFi_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateDefiBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET gameFi_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateSocialFiBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET socialFi_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateMemeCoinsBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET meme_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}

async function updateShitCoinsBox(level, telegramId) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE mine_cards SET shit_level = ? WHERE telegramId = ?", [+level, +telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
)}


module.exports = router;