const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database('mydatabase.db');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'website')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const updateGameData = require('./routes/updateGameData');
app.use('/updateGameData', updateGameData);

const getGameData = require('./routes/getGameData');
app.use('/getGameData', getGameData);



//db.run("CREATE TABLE users_data (ID INTEGER PRIMARY KEY, telegramId INTEGER, energy INTEGER, coins INTEGER, time TEXT)");

//db.run("CREATE TABLE refferal_origin (ID INTEGER PRIMARY KEY, telegramId INTEGER, link TEXT)");