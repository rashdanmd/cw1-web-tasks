import http from "http";
import fs from "fs";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + "/index.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading HTML file");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on PORT:${port}`);
});
