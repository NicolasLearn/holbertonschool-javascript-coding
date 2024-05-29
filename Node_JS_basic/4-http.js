// Import the 'http' module to create an HTTP server
const http = require('http');

// Create an HTTP server that responds to requests
const app = http.createServer((req, res) => {
  // Write a 200 OK status header with the Content-Type set to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // End the response and send the text "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Define the port number on which the server will listen
const port = 1245;

// Start the server and have it listen on the defined port
app.listen(port, () => {
  // Log a message indicating that the server is running and on which port
  console.log(`Server is running at ${port}`);
});

// Export the 'app' server instance for use in other modules
module.exports = app;
