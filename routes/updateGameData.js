const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    try {
        await updateGameData(data);
        res.json({ success: true });
    } catch (err) {
        console.error("Error inserting data:", err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

async function updateGameData(data, retriesLeft = 3) {
    const query = "INSERT INTO users_data (telegramId, energy, coins, time) VALUES (?, ?, ?, ?)";
    const params = [+data.telegramId, data.energy, data.coins, data.time];

    return new Promise((resolve, reject) => {
        const attemptInsert = () => {
            db.run(query, params, function (err) {
                if (err) {
                    if (err.code === 'SQLITE_BUSY' && retriesLeft > 0) {
                        console.log('Database is busy, retrying...');
                        setTimeout(() => {
                            attemptInsert();
                        }, 100); // Retry after 100ms
                    } else {
                        console.error("Error inserting data:", err.message);
                        reject(err);
                    }
                } else {
                    resolve();
                }
            });
        };

        attemptInsert();
    });
}

module.exports = router;