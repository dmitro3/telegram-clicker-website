const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    const data = req.body;
    const information = await getUserDailyRewards(data.telegramId);
    console.log(information)
    if (information.length == 0) {
        await addUser(data);
        console.log(information)
        const day = [{day: 'day1'}]
        res.json({day: day})
    } else {
        const day = getLastDay(information[0]);
        console.log(day)
        res.json({day: day})
    }
});

async function getUserDailyRewards(telegramId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM daily_rewards WHERE telegramId = ?`,[telegramId] , function (err, rows) {
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
            db.run("INSERT INTO daily_rewards (telegramId, day1_claimed, day1_date, day2_claimed, day2_date, day3_claimed, day3_date, day4_claimed, day4_date, day5_claimed, day5_date, day6_claimed, day6_date, day7_claimed, day7_date, day8_claimed, day8_date, day9_claimed, day9_date, day10_claimed, day10_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [+data.telegramId, 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false','false', 'false', 'false', 'false', 'false','false', 'false', 'false', 'false', 'false',], function (err) {
                if (err) {
                    console.error("Error inserting data:", err.message);
                    reject(err);
                } else {
                    resolve();
                }
            });
        }
        )}

    function getLastDay (information) {
        let data = {
            day: '',
            canClaim: ''
        }
        if (information.day1_claimed == 'false'){
            data.day = 'day1';
            data.canClaim = 'true';
            return data;
        } else if (information.day2_claimed == 'false') {
            data.day = 'day2';
            if (checkDate(information.day1_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        } else if (information.day3_claimed == 'false') {
            data.day = 'day3';
            if (checkDate(information.day2_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day4_claimed == 'false') {
            data.day = 'day4';
            if (checkDate(information.day3_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day5_claimed == 'false') {
            data.day = 'day5';
            if (checkDate(information.day4_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day6_claimed == 'false') {
            data.day = 'day6';
            if (checkDate(information.day5_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day7_claimed == 'false') {
            data.day = 'day7';
            if (checkDate(information.day6_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day8_claimed == 'false') {
            data.day = 'day8';
            if (checkDate(information.day7_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day9_claimed == 'false') {
            data.day = 'day9';
            if (checkDate(information.day8_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else if (information.day10_claimed == 'false') {
            data.day = 'day10';
            if (checkDate(information.day9_claimed) != 'today') {
                data.canClaim = 'true';
            } else {
                data.canClaim = 'false';
            }
            return data;
        }else{
            return 'COMPLETED'
        }
    }

    function checkDate(date) {
        const today = new Date();

        const inputDate = new Date(date);
    
        if (today.getFullYear() === inputDate.getFullYear() &&
            today.getMonth() === inputDate.getMonth() &&
            today.getDate() === inputDate.getDate()) {
            return 'today';
        } else {
            return 'not-today';
        }
    }

module.exports = router;  