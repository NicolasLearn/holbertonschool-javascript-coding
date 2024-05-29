const readDatabase = require('../utils');

class StudentsController {
  // Define a static method named getAllStudents which accepts request and response as arguments
  static getAllStudents(req, res) {
    // Get the path of the database file from command line arguments
    const databaseFile = process.argv[2];

    // Call the readDatabase function to read the database asynchronously
    readDatabase(databaseFile)
      .then((fields) => {
        // Set the response status to 200 and content type to plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Write the initial message to the response
        res.write('This is the list of our students\n');
        // Iterate through each field in the database and write the number of students and their list of first names to the response
        for (const [field, students] of Object.entries(fields)) {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        }
        // End the response
        res.end();
      })
      .catch((err) => {
        // If there's an error loading the database, set the response status to 500 and send the error message
        res.status(500).send(err.message);
      });
  }

  // Define a static method named getAllStudentsByMajor which accepts request and response as arguments
  static getAllStudentsByMajor(req, res) {
    // Extract the major parameter from the request
    const { major } = req.params;
    // Get the path of the database file from command line arguments
    const databaseFile = process.argv[2];

    // Check if the major parameter is not CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      // If it's not CS or SWE, set the response status to 500 and send an error message
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Call the readDatabase function to read the database asynchronously
    readDatabase(databaseFile)
      .then((fields) => {
        // Check if the specified major exists in the database fields
        if (fields[major]) {
          // If it exists, set the response status to 200 and content type to plain text
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          // Write the list of first names for the students in the specified major to the response
          res.write(`List: ${fields[major].join(', ')}\n`);
          // End the response
          res.end();
        } else {
          // If the specified major does not exist in the database fields, set the response status to 500 and send an error message
          res.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        // If there's an error loading the database, set the response status to 500 and send an error message
        res.status(500).send('Cannot load the database');
      });
  }
}

// Export the StudentsController class to be used in other modules
module.exports = StudentsController;
