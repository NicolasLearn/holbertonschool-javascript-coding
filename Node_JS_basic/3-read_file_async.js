// Import the 'fs' module to enable file operations
const fs = require('fs');
// Import the 'util' module to use utility functions
const util = require('util');

// Export an asynchronous function named 'countStudents' that takes a file path as an argument
module.exports = async function countStudents(path) {
  // Construct the full path to the file using the current working directory and the provided path
  const pathname = `${process.cwd()}/${path}`;
  // Promisify the 'readFile' function from the 'fs' module to use it with async/await
  const readFile = util.promisify(fs.readFile);
  try {
    // Read the content of the file at 'pathname' asynchronously with UTF-8 encoding
    const data = await readFile(pathname, 'utf8');
    // Split the file content by new lines, remove the first line (header) and the last empty line
    const studentData = data.split('\n').slice(1, -1);
    // Filter students in the 'CS' field and map their names
    const CS = studentData
      .filter((student) => student.split(',')[3] === 'CS')
      .map((student) => student.split(',')[0]);
    // Filter students in the 'SWE' field and map their names
    const SWE = studentData
      .filter((student) => student.split(',')[3] === 'SWE')
      .map((student) => student.split(',')[0]);
    // Log the total number of students to the console
    console.log(`Number of students: ${studentData.length}`);
    // Log the number of students in 'CS' and their names
    console.log(
      `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`,
    );
    // Log the number of students in 'SWE' and their names
    console.log(
      `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
    );

    // Return a string with the number of students and the details for each field
    return `Number of students: ${studentData.length}
Number of students in CS: ${CS.length}. List: ${CS.join(', ')}
Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
  } catch (error) {
    // If an error occurs (e.g., the file does not exist), throw a new error with a custom message
    throw new Error('Cannot load the database');
  }
};
