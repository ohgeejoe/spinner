// WONT WORK ON CODERUNNER EXTENSION. RUN ON NODE
let timeDelay = 300;
const spinner = ['|', '/', '-', '\\'];
const endTime = timeDelay * spinner.length;

const spinnerAnimation = setInterval(() => {
  for (let i = 0; i < spinner.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spinner[i]}   `);
    }, timeDelay * i);
  }
}, endTime);

setTimeout(() => {
  clearInterval(spinnerAnimation);
  process.stdout.write('\n');
}, 4000);



/* coderunner extension dosent output correctly (hello from spinner1.js...
heyyy). node in the terminal does. /r brings cursor to beginning and should overwrite the hello. */

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r |   ');
// }, 900);