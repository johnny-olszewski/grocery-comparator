const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "grocery.db"), (err) => {
  if (err) {
    console.error("Error opening database " + err.message);
  } else {
    console.log("Connected to the SQLite database.");
    db.run(`CREATE TABLE IF NOT EXISTS grocery_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            item_name TEXT NOT NULL,
            store TEXT NOT NULL,
            brand TEXT NOT NULL,
            on_sale INTEGER NOT NULL,
            price REAL NOT NULL
        );`);
  }
});

module.exports = db;
