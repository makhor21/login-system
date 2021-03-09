const express = require("express");
const app = express();
const path = require("path");
const register = require("./routes/register");
const profile = require("./routes/profile");
const editProfile = require("./routes/editprofile");
const logout = require("./routes/logout");

app.use(express.static(path.join(__dirname, "./public")));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", register);
app.use("/profile", profile);
app.use("/editprofile", editProfile);
app.use("/logout", logout);

app.listen(8080, () => {
  console.log("Server started at 8080 ...");
});
