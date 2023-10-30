const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const setTimer = (seconds) => {
  console.log(`Setting timer for ${seconds} seconds...`);
  setTimeout(() => {
    process.stdout.write('\x07'); // Beep sound
  }, seconds * 1000);
};

const handleUserInput = (input) => {
  if (input === 'b') {
    process.stdout.write('\x07'); // Beep sound
  } else if (/[1-9]/.test(input)) {
    const seconds = parseInt(input);
    setTimer(seconds);
  }
};

rl.question('Press "b" for an immediate beep or enter a number (1-9) to set a timer: ', (input) => {
  handleUserInput(input);

  rl.close();
});

rl.on('close', () => {
  console.log('Thanks for using me, ciao!');
  process.exit(0);
});
