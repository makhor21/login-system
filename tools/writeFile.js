const fs = require("fs");
const path = require("path");

function writeFile(data) {
  fs.writeFileSync(
    path.join(__dirname, "../database/db.json"),
    JSON.stringify(data),
    "utf8"
  );
}

module.exports = writeFile;
