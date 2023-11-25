const express = require("express");

const app = express();

app.use("/assets", express.static("assets")); // Insertar middleware

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname,
  });
  //   res.send(__dirname);
});

app.listen(3000);
