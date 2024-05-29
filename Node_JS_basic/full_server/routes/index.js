// Import the Express module
const express = require('express');
// Import the AppController module
const AppController = require('../controllers/AppController');
// Import the StudentsController module
const StudentsController = require('../controllers/StudentsController');

// Create a new router instance
const router = express.Router();

// Define routes for the root endpoint and the /students endpoint, calling the corresponding methods from the AppController and StudentsController modules
router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
// Define a route for the /students/:major endpoint, calling the getAllStudentsByMajor method from the StudentsController module with the specified major parameter
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Export the router to be used in other modules
module.exports = router;
