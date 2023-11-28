const express = require("express");
const cookieSession = require("cookie-session");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["65sadf456asd4f6a5s4f", "87as7d78x223sa5dfh"], // Llaves para encriptar las cookies
    // keys: ["string1", "string2"], // Llaves para encriptar las cookies
  })
);

app.get("/", (req, res) => {
  req.session.visits = req.session.visits || 0;
  req.session.visits = req.session.visits + 1;

  res.send(`${req.session.visits} visita(s).`);
});

app.listen(3000);
