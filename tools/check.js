const writeFile = require("./writeFile");

function checking(data, user, pass) {
  for (const key in data) {
    if (data[key].username === user && data[key].password === pass) {
      data[key].isLoggedIn = "true";
      writeFile(data);
      return data[key];
    }
  }
  return false;
}

module.exports = checking;
