const args = process.argv.slice(2);

const scheduleBeep = (seconds) => {
  if (seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // Beep sound
    }, seconds * 1000);
  }
};

for (const arg of args) {
  const seconds = parseInt(arg);
  if (!isNaN(seconds) && seconds > 0) {
    scheduleBeep(seconds);
  }
}

// Handle edge cases: no valid numbers provided, negative numbers, and non-numbers
if (args.length === 0) {
  console.log("No alarms scheduled.");
}

