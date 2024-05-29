// Import the Express module to create an Express application
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route handler for the root path ('/') using the HTTP GET method
app.get('/', (req, res) => {
  // Send the response 'Hello Holberton School!' as plain text
  res.send('Hello Holberton School!');
});

// Make the application listen on port 1245 for incoming HTTP requests
app.listen(1245);

// Export the 'app' instance for use in other modules
module.exports = app;
