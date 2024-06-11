const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

router.post('/', async (req, res, next) => {
    data = req.body;
    if (data.day == 'day1'){
        await updateDay1(data)
    } else if (data.day == 'day2'){
        await updateDay2(data)
    } else if (data.day == 'day3'){
        await updateDay3(data)
    } else if (data.day == 'day4'){
        await updateDay4(data)
    } else if (data.day == 'day5'){
        await updateDay5(data)
    } else if (data.day == 'day6'){
        await updateDay6(data)
    } else if (data.day == 'day7'){
        await updateDay7(data)
    } else if (data.day == 'day8'){
        await updateDay8(data)
    } else if (data.day == 'day9'){
        await updateDay9(data)
    } else if (data.day == 'day10'){
        await updateDay10(data)
    }
    res.json({})
});

async function updateDay1(data) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE daily_rewards SET day1_claimed = ? day1_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
            if (err) {
                console.error("Error inserting data:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    }
    )}

    async function updateDay2(data) {
        return new Promise((resolve, reject) => {
            db.run("UPDATE daily_rewards SET day2_claimed = ? day2_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                if (err) {
                    console.error("Error inserting data:", err.message);
                    reject(err);
                } else {
                    resolve();
                }
            });
        }
        )}
        async function updateDay3(data) {
            return new Promise((resolve, reject) => {
                db.run("UPDATE daily_rewards SET day3_claimed = ? day3_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                    if (err) {
                        console.error("Error inserting data:", err.message);
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
            )}

            async function updateDay4(data) {
                return new Promise((resolve, reject) => {
                    db.run("UPDATE daily_rewards SET day4_claimed = ? day4_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                        if (err) {
                            console.error("Error inserting data:", err.message);
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
                )}

                async function updateDay5(data) {
                    return new Promise((resolve, reject) => {
                        db.run("UPDATE daily_rewards SET day5_claimed = ? day5_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                            if (err) {
                                console.error("Error inserting data:", err.message);
                                reject(err);
                            } else {
                                resolve();
                            }
                        });
                    }
                    )}

                    async function updateDay6(data) {
                        return new Promise((resolve, reject) => {
                            db.run("UPDATE daily_rewards SET day6_claimed = ? day6_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                                if (err) {
                                    console.error("Error inserting data:", err.message);
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            });
                        }
                        )}
                        async function updateDay7(data) {
                            return new Promise((resolve, reject) => {
                                db.run("UPDATE daily_rewards SET day7_claimed = ? day7_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                                    if (err) {
                                        console.error("Error inserting data:", err.message);
                                        reject(err);
                                    } else {
                                        resolve();
                                    }
                                });
                            }
                            )}

                            async function updateDay8(data) {
                                return new Promise((resolve, reject) => {
                                    db.run("UPDATE daily_rewards SET day8_claimed = ? day8_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                                        if (err) {
                                            console.error("Error inserting data:", err.message);
                                            reject(err);
                                        } else {
                                            resolve();
                                        }
                                    });
                                }
                                )}

                                async function updateDay9(data) {
                                    return new Promise((resolve, reject) => {
                                        db.run("UPDATE daily_rewards SET day9_claimed = ? day9_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
                                            if (err) {
                                                console.error("Error inserting data:", err.message);
                                                reject(err);
                                            } else {
                                                resolve();
                                            }
                                        });
                                    }
                                    )}

                                    async function updateDay10(data) {
                                        return new Promise((resolve, reject) => {
                                            db.run("UPDATE daily_rewards SET day10_claimed = ? day10_date = ? WHERE telegramId = ?", ['true', data.data, +data.telegramId], function (err) {
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