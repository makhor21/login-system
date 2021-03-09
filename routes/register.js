const express = require("express");
const register = express.Router();
const { v4: uuidv4 } = require("uuid");
const writeFile = require("../tools/writeFile");
const readFile = require("../tools/readFile");

let data = readFile();

register.get("/", (req, res) => {
  res.status("301");
  res.render("pages/login");
});

register.get("/signup", (req, res) => {
  res.status("301");
  res.render("pages/signup");
});

register.post("/", (req, res) => {
  let users = [];

  for (const key in data) {
    users.push(data[key].username);
  }
  for (let index = 0; index < users.length; index++) {
    if (users[index] === req.body.registerUsername) {
      res
        .status("401")
        .send(
          "<script language='javascript'>window.alert('ERROR... you cannot pickup this username');window.location='/signup';</script>"
        );
      return res.redirect("/");
    }
  }
  newUser = {
    id: uuidv4(),
    username: req.body.registerUsername,
    email: req.body.registerEmail,
    password: req.body.registerPassword,
    gender: req.body.registerGender,
    isLoggedIn: "false",
  };
  data.push(newUser);
  writeFile(data);
  res.status("200");
  res.render("pages/login");
});

module.exports = register;
