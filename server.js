const http = require("http");
//importo la libreria dotenv
const dotenv = require("dotenv");
//avvio la libreria dotenv
dotenv.config();

const port = process.env.PORT || 5175;

// specificare come il server deve rispondere
const server = http.createServer(function (req, res) {
  res.end(`<h1>Hello World!</h1>
  PIN: ${process.env.PIN}<br>
  `);
});

server.listen(port, function () {
  console.log("Server is running on port: " + port);
});
