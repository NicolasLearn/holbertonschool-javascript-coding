// Import the Express module to create an Express application
const express = require('express');

// Import the countStudents function from the '3-read_file_async' module
const countStudents = require('./3-read_file_async');

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen
const port = 1245;

// Get the database file path from the command line arguments
const databaseFile = process.argv[2];

// Define a route handler for the root path ('/') using the HTTP GET method
app.get('/', (req, res) => {
  // Send the response 'Hello Holberton School!' as plain text
  res.send('Hello Holberton School!');
});

// Define a route handler for the '/students' path using the HTTP GET method
app.get('/students', (req, res) => {
  // Call the countStudents function with the database file path
  countStudents(databaseFile)
    .then((data) => {
      // Write a message indicating the list of students
      res.write('This is the list of our students\n');
      // Append the data returned by countStudents
      res.write(data);
      // End the response
      res.end();
    })
    .catch((err) => {
      // Send a 500 status code and the error message if there is an error
      res.status(500).send(err.message);
    });
});

// Make the application listen on the specified port for incoming HTTP requests
app.listen(port, () => {
  // Log a message indicating that the server is running
  console.log(`Server running on port ${port}`);
});

// Export the 'app' instance for use in other modules
module.exports = app;
