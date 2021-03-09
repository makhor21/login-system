const express = require("express");
const profile = express.Router();
const check = require("../tools/check");
const readFile = require("../tools/readFile");

let data = readFile();

profile.post("/", (req, res) => {
  if (req.body) {
    let username = JSON.parse(JSON.stringify(req.body.username));
    let password = JSON.parse(JSON.stringify(req.body.password));
    let result = check(data, username, password);
    if (result !== false) {
      res.status("200");
      res.render("pages/profile", { result });
    } else {
      res
        .status("401")
        .write(
          "<script language='javascript'>window.alert('Invalid');window.location='/';</script>"
        );
    }
  }
});

module.exports = profile;
