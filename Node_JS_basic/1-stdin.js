// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Add an event handler for 'readable' to stdin
process.stdin.on('readable', () => {
  // Read available data from stdin 
  const name = process.stdin.read();
  // If Data is not null, display the name of the user
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
// Add an event handler for 'end' to stdin and display the close message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
