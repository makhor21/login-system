const express = require("express");
const editProfile = express.Router();
const writeFile = require("../tools/writeFile");
const readFile = require("../tools/readFile");

let data = readFile();

editProfile.post("/", (req, res) => {
  let result = [];
  for (const key in data) {
    if (data[key].username == req.body.profileUsername) {
      if (data[key].isLoggedIn == "true") {
        data[key].email = req.body.profileEmail;
        data[key].gender = req.body.profileGender;
      }
      if (
        data[key].password != req.body.profilePassword &&
        data[key].isLoggedIn == "true"
      ) {
        data[key].password = req.body.profilePassword;
        data[key].isLoggedIn = "false";
        writeFile(data);
        res.send(
          "<script language='javascript'>alert('your password is changed...');window.location='/';</script>"
        );
      }
      if (data[key].isLoggedIn == "false") {
        res.send(
          "<script language='javascript'>alert('timed out');window.location='/';</script>"
        );
      }
      result = data[key];
    }
  }
  writeFile(data);
  res.status("200");
  res.render("pages/profile", { result });
});

module.exports = editProfile;
