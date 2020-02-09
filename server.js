const express = require("express");
const app = express();
//const router = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
port = process.env.PORT || 5000;

// Allow any method from any host and log requests

//app.use(express.static('dist/course-manager'));

app.use("/", (req, res) => {
  console.log("to router");
  res.render("index");
});

app.listen(port, () => console.log("Server running on:" + port));
