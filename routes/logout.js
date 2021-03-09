const express = require("express");
const logout = express.Router();
const writeFile = require("../tools/writeFile");
const readFile = require("../tools/readFile");

let data = readFile();

logout.post("/", (req, res) => {
  for (const key in data) {
    if (data[key].id == req.body.id) {
      data[key].isLoggedIn = "false";
    }
  }
  writeFile(data);
  res
    .status("200")
    .send("<script language='javascript'>window.location='/'</script>");
});

module.exports = logout;
