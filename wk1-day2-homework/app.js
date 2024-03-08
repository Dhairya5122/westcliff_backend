const http = require("http");
const fs = require("fs");
const path = require("path"); // Import the 'path' module
const express = require("express");

const app = express(); // Create an Express app

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set up a route to handle requests
app.get("/", (req, res) => {
  console.log("The NodeJS server on port 3000 is now running...");

  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Read the content of index.html file
  fs.readFile("food_blog.html", "utf8", (err, data) => {
    if (err) {
      res.end("Error reading the HTML file");
    } else {
      res.end(data);
    }
  });
});

// Set up a route to handle 404 errors
app.use((req, res) => {
  fs.readFile("404.html", "utf8", (err, data) => {
    if (err) {
      res.end("Error reading the HTML file");
    } else {
      res.status(404).end(data);
    }
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server is connected running on http://localhost:3000");
});
