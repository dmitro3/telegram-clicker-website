const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const information = await getUsersData(data.telegramId);
    console.log(information.length)
    console.log(typeof information.length)
    if (information.length != 0) {
        await addUser(information);
        res.json({information: "User added"})
    } else {
        res.json({information: "User was already in database"})
    }
});

async function getUsersData(telegramId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM users_information WHERE telegramId = ?`,[telegramId] , function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    }
    )}

    async function addUser(data) {
        return new Promise((resolve, reject) => {
            db.run("INSERT INTO users_information (telegramId, username, photo, isPremium) VALUES (?, ?, ?, ?)", [+data.telegramId, data.username, data.photo, `${data.isPremium}`], function (err) {
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