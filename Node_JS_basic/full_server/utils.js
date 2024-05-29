// Import the 'fs' module to perform file system operations
const fs = require('fs');

// Define a function named readDatabase that accepts a file path as an argument
function readDatabase(filePath) {
  // Return a Promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Read the file asynchronously using 'fs.readFile'
    fs.readFile(filePath, 'utf8', (err, data) => {
      // Handle errors encountered during file reading
      if (err) {
        // Reject the Promise with an error if the file cannot be loaded
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file data into lines and remove leading/trailing whitespaces
      const lines = data.trim().split('\n');
      // Initialize an empty object to store student names per field
      const fields = {};

      // Iterate over each line in the file
      lines.forEach((line) => {
        // Trim the line to remove leading/trailing whitespaces
        if (line.trim()) {
          // Split the line into comma-separated values and extract firstname and field
          const [firstname, , , field] = line.split(',');
          // Check if the field is valid and not the header
          if (field && field !== 'field') {
            // Create an array for the field if it doesn't exist
            if (!fields[field]) {
              fields[field] = [];
            }
            // Push the firstname into the corresponding field array
            fields[field].push(firstname);
          }
        }
      });

      // Resolve the Promise with the object containing student names per field
      resolve(fields);
    });
  });
}

// Export the readDatabase function for use in other modules
module.exports = readDatabase;
