// Run app like this : USER_ID=239482 USER_KEY=foobar node read-env-variable.js

let userId = process.env.USER_ID; // "239482"
let userKey = process.env.USER_KEY; // "foobar"

console.log("Hello world !!!");
console.log(userId, userKey);

// # .env file
require("dotenv").config();
process.env.USER_ID1; // "239482"
process.env.USER_KEY1; // "foobar"
console.log(process.env.NODE_ENV1); // "development"

// contexte racine du fichier courant <=> window
console.log(global);
