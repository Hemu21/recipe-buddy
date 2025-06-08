const Database = require("better-sqlite3");
const path = require("path");
const db = new Database(path.resolve(__dirname, "recipes.db"));

const initSql = require("fs").readFileSync(
  path.resolve(__dirname, "migrations", "init.sql"),
  "utf8"
);
db.exec(initSql);

module.exports = db;
