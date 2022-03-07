// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`);
//     readline.close();
// });

// Inquirer.js lets you do many things like asking multiple choices, having radio buttons, confirmations, and more.

const inquirer = require("inquirer");

var questions = [
    {
        type: "input",
        name: "name",
        message: "What's your name?",
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(`Hi ${answers["name"]}!`);
});
