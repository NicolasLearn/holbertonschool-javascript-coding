// Define a class named AppController
class AppController {
  // Define a static method named getHomepage which accepts request and response as arguments
  static getHomepage(req, res) {
    // Set the status of the response to 200 and send the message 'Hello Holberton School!'
    res.status(200).send('Hello Holberton School!');
  }
}
  
// Export the AppController class to be used in other modules
module.exports = AppController;
  