// Basic output

console.log("x", "y");

console.log("My %s has %d ears", "cat", 2);

console.log("%o", Number);

//console.clear();

// Counting elements +

const x = 1;
const y = 2;
const z = 3;
console.count(
    "The value of x is " + x + " and has been checked .. how many times?"
);
console.count(
    "The value of x is " + x + " and has been checked .. how many times?"
);
console.count(
    "The value of y is " + y + " and has been checked .. how many times?"
);

const oranges = ["orange", "orange"];
const apples = ["just one apple"];
oranges.forEach((fruit) => {
    console.count(fruit);
});
apples.forEach((fruit) => {
    console.count(fruit);
});

console.countReset("orange");

oranges.forEach((fruit) => {
    console.count(fruit);
});

// Print the stack trace

const function2 = () => console.trace();
const function1 = () => function2();
function1();

// Calculate the time spent

const doSomething = () => console.log("test");
const measureDoingSomething = () => {
    console.time("doSomething()");
    //do something, and measure the time it takes
    doSomething();
    console.timeEnd("doSomething()");
};
measureDoingSomething();

// console.error prints to the stderr stream.

// Color the output

console.log("\x1b[33m%s\x1b[0m", "hi!");

// const chalk = require("chalk"); // npm install chalk
// console.log(chalk.yellow("hi!"));

// Create a progress bar
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);
