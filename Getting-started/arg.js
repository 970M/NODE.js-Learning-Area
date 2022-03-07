// run app like this : node arg.js arg1 arg2 --name=joe

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

const args = process.argv.slice(2);
console.log(args);

// Using the minimist library, which helps dealing with argument
// node app.js --name=joe
const parser = require("minimist");
const argsm = parser(process.argv.slice(2));
console.log(argsm);
console.log(argsm["name"]);
