const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/saludo", (req, res) => {
  res.send(`Hola ${req.query.name}`);
});

app.post("/", (req, res) => {
  res.send(`Hola ${req.body.name}`);
});

app.listen(3000);
