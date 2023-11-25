const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(
  "/assets",
  express.static("assets", {
    etag: false,
    maxAge: "5h",
  })
); // Insertar middleware

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
