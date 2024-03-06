const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("The NodeJS server on port 3000 is now running...");

  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Check the URL and send appropriate response
  if (req.url === "/home") {
    // Read the content of index.html file
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        res.end("Error reading the HTML file");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    // Read the content of index.html file
    fs.readFile("about.html", "utf8", (err, data) => {
      if (err) {
        res.end("Error reading the HTML file");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    // Read the content of index.html file
    fs.readFile("contact.html", "utf8", (err, data) => {
      if (err) {
        res.end("Error reading the HTML file");
      } else {
        res.end(data);
      }
    });
  } else {
    fs.readFile("404.html", "utf8", (err, data) => {
      if (err) {
        res.end("Error reading the HTML file");
      } else {
        res.end(data);
      }
    });
  }
});

// Listen on port 3000
server.listen(5000, () => {
  console.log("Server is connected running on http://localhost:5000/home");
});
