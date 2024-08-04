const prompt = require('prompt-sync')();
/*


why prompt() function doesn't work in NodeJS environment?

The root cause of the error is that you're trying to use the prompt() function in a Node.js environment, where it's not available.

SOLUTION:

1.Run your code in a browser:

2.Use a Node.js-compatible prompt library:


a) For cases where you need to use a prompt-like functionality in Node.js, you can use libraries like prompt-sync.
Install the library using npm:

b) Bash-Command : 
npm install prompt-sync

c)Import and use it in your code:
const prompt = require('prompt-sync')();

*/


let name = prompt("What is your name?");
console.log("Hello, " + name + "!");
let age = prompt("What is your age?")
console.log("You are " + age + " years old")


