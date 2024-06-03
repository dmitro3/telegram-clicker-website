const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const updateGameData = require('./routes/updateGameData')
app.use('/updateGameData', updateGameData);

const getGameData = require('./routes/getGameData')
app.use('/getGameData', getGameData);

db.run("CREATE TABLE IF NOT EXISTS users_data (telegramId INTEGER PRIMARY KEY, energy INTEGER, coins INTEGER, time TEXT)")