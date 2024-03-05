const http = require("http");

const server = http.createServer((req, res) => {
  console.log("The NodeJS server on port 5000 is now running...");

  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Check the URL and send appropriate response
  if (req.url === "/") {
    res.end(`Home Page`);
  } else if (req.url === "/about") {
    res.end(`About Page`);
  } else if (req.url === "/contact") {
    res.end(`Contact Page`);
  } else {
    res.end("Invalid Request!");
  }
});

// Listen on port 5000
server.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});
