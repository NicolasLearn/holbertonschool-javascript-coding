// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Read user input from stdin
process.stdin.on('data', (data) => {
  // Convert input to string and trim whitespace
  const name = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Display the closing message
  console.log("This important software is now closing");
  process.exit();
});

// Handle program exit (if user uses Ctrl+C)
process.on('SIGINT', () => {
  console.log("This important software is now closing");
  process.exit();
});
