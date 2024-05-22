import fs from "fs";
import http from "http";
const port = 3000;
const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "Content-Tye": "text/html" });
    res.write("Hello Node");
    res.end();
  }
);
server.listen(port, (error?: Error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
