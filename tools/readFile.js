const fs = require("fs");
const path = require("path");

function readFile() {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "../database/db.json"), "utf8")
  );
}

module.exports = readFile;
