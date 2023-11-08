const http = require("http");
//importo la libreria dotenv
const dotenv = require("dotenv");
//avvio la libreria dotenv
dotenv.config();

// di default usiamio la 3000 ma siccome potrebbe essere già in uso prevediamo di passare la porta come variabile d'ambiente
/**
 * @type {number};
 */
// se mettiamo un + davanti a una variabile stringa la convertiamo in numero
const port = +process.env.PORT || 3000;

function htmlResponse(res, content, statusCode = 200) {
  // modo più compatto per impostare gli header
  res.writeHead(statusCode, { "Content-type": "text/html; charset=utf-8" });
  // Possiamo settare singolarmente le info degli header
  // res.statusCode = 200;

  // .end invia la risposta
  res.end(content);
}

function jsonResponse(res, content, statusCode = 200) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
}

// specificare come il server deve rispondere
// la callback verrà invocata ogni volta che arriva una richiesta su una porta specificata
/**
 *
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */

const server = http.createServer(function (req, res) {
  // console.log(req.url);
  switch (req.url) {
    case "/":
      htmlResponse(res, "<h1>Ciao a tutti</h1>");
      break;
    case "/about":
      htmlResponse(res, "<h1>Ciao a tutti</h1>");
      break;
    case "/api":
      jsonResponse(res, { message: "Ciao a tutti!" });
      break;
    default:
      htmlResponse(res, "<h1>404 Not found</h1>", 404);
  }

  // Possiamo inviare dati in formato html
  // htmlResponse(res, "<h1>Ciao a tutti</h1>");

  // Possiamo inviare dati in formato json
  // jsonResponse(res, { message: "Ciao a tutti!" });
});

server.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
