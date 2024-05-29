// Import the Express module
const express = require('express');
// Import the router module from the './routes' file
const router = require('./routes');

// Create an Express application
const app = express();
// Define the port number for the server
const port = 1245;

// Use the router middleware for all routes
app.use('/', router);

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the Express application to be used in other modules
module.exports = app;
