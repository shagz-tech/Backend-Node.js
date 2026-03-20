const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/data") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      fs.writeFile("data.txt", JSON.stringify(data), (err) => {
        if (err) {
          res.end("Error saving data");
        } else {
          res.end("Data stored in file");
        }
      });

    });
  }

});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});