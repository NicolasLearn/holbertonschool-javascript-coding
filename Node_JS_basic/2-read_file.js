// Import the 'fs' (file system) module to enable file operations
const fs = require('fs');

// Define a function 'countStudents' that takes a file path as an argument
const countStudents = (path) => {
  try {
    // Read the content of the file at the given path synchronously with UTF-8 encoding
    const response = fs.readFileSync(path, 'utf8');

    // Trim any whitespace and split the content by new lines to get an array of lines
    const students = response.trim().split('\n')
      .map((student) => student.split(',')); // Split each line by commas to get an array of fields

    // Remove the first element of the array, which contains the header
    students.shift();

    // Initialize an object to store students grouped by their fields
    const fields = {};

    // Iterate through each student record
    students.forEach((student) => {
      // If the field already exists in the object, push the student's first name into the array
      if (student[3] in fields) fields[student[3]].push(student[0]);
      else fields[student[3]] = [student[0]]; // Otherwise, create a new array with the student's first name
    });

    // Log the total number of students to the console
    console.log(`Number of students: ${students.length}`);

    // Iterate through each field in the 'fields' object
    Object.keys(fields).forEach((field) => {
      // Create a message with the number of students in the field and their names
      let message = `Number of students in ${field}: ${fields[field].length}.`;
      message += ` List: ${fields[field].join(', ')}`;
      // Log the message to the console
      console.log(message);
    });
  } catch (err) {
    // If an error occurs (e.g., the file does not exist), throw a new error with a custom message
    throw new Error('Cannot load the database');
  }
};

// Export the 'countStudents' function as a module to be used in other files
module.exports = countStudents;
