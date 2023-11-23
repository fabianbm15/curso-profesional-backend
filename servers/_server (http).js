const http = require("http");

function responderPeticion(req, res) {
  res.end("Hola mundo");
}

let server = http.createServer(responderPeticion);

server.listen(3000);
