const https = require("https");
const fs = require("fs");

// Load SSL/TLS certificates
const options = {
  key: fs.readFileSync("key.pem"), // Path to your private key
  cert: fs.readFileSync("cert.pem"), // Path to your certificate
};

// Create HTTPS server
const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello, World! This server is running securely over HTTPS!\n");
});

// Specify the port to listen on
const PORT = 4433; // Default HTTPS port

// Start the server
server.listen(PORT, () => {
  console.log(`Server running securely at https://localhost:${PORT}/`);
});
