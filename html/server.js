const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname,
  });
  //   res.send(__dirname);
});

app.listen(3000);
