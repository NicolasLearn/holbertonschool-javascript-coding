// Import the 'http' module to create an HTTP server
const http = require('http');
// Import the 'url' module to parse URL strings
const url = require('url');
// Import the 'countStudents' function from another module
const countStudents = require('./3-read_file_async');

// Create an HTTP server that responds to requests
const app = http.createServer((req, res) => {
  // Parse the request URL
  const reqUrl = url.parse(req.url, true);

  // Check if the request path is '/'
  if (reqUrl.pathname === '/') {
    // Write a 200 OK status header with the Content-Type set to plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Write the response body 'Hello Holberton School!'
    res.write('Hello Holberton School!');
    // End the response
    res.end();
  } else if (reqUrl.pathname === '/students') {
    // Get the database file path from the command line arguments
    const databaseFile = process.argv[2];

    // Call the 'countStudents' function with the database file path
    countStudents(databaseFile)
      .then((message) => {
        // Write a 200 OK status header with the Content-Type set to plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Write the response body with the students list
        res.write('This is the list of our students\n');
        res.write(message); // Include the students list from the resolved promise
        // End the response
        res.end();
      })
      .catch((err) => {
        // Write a 500 Internal Server Error status header with the Content-Type set to plain text
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        // Write the error message in the response body
        res.write(err.message);
        // End the response
        res.end();
      });
  }
});

// Start the server and have it listen on port 1245
app.listen(1245);

// Export the 'app' server instance for use in other modules
module.exports = app;
