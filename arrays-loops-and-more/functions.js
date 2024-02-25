// Functions in JS are very similar to functions in Python - they're blocks of code you can call from anywhere in your code and executed
// Create a function using the function keyword
// You can call a function using the function name followed by curved brackets ()
// The functions code block is put inside curly brackets {}
// Remember to run the code blocks with node functions.js
// create a function using the keyword function
// call a function using the function name and curved brackets ()
// functions code-block is put inside curly brackets {}
// we use the curly brackets { } to define the start and end of the function i.e. the code block - you technically don't have to indent your code for javascript to work but it makes it easier to read

// This is a function declaration
function sayHello() {
    console.log("Hello");
}

// This is a function call
sayHello(); // "Hello"

// This is a function declaration with a parameter
function sayHelloTo(name) {
    console.log(`Hello ${name}`);
};

// This is a function call with an argument
sayHelloTo("Alexander"); // "Hello Alexander"


// functions in JS can also return values - use the return keyword to return a value from a function - you can then use the value returned from the function in your code
function addTwoNumbers(num1, num2) {
    return num1 + num2;
};

const result = addTwoNumbers(1, 2);
console.log(result); // 3

// function expressions - there's two ways to create functions in JS
// the first is a function declaration - this is what we've been using so far
// the second is a function expression - this is where you assign a function to a variable
// you can then call the function using the variable name followed by curved brackets ()

// this is a function expression
const sayGoodbye = function() {
    console.log("Bye");
};

// this is a function call
sayGoodbye(); // "Bye"

// arrow functions - these are a more modern way of writing functions in JS - they're shorter and easier to read
// create an arrow function using the => syntax - then call the function using the variable name followed by curved brackets ()

// this is an arrow function
const sayGreetings = () => {
    console.log("Welcome to She Codes");
}

// this is a function call
sayGreetings(); // "Welcome to She Codes"


// arrow functions work like normal functions - you can pass parameters and return values

// this is an arrow function with parameters
const addNumbers = (num1, num2) => {
    return num1 + num2;
};

// this is a function call
const result = addNumbers(1, 2);
console.log(result); // 3

// there's no one single way to create a function in javascript - you can use function declarations, function expressions or arrow functions - it's up to you to decide which one to use
// the most important thing is to be consistent - pick one way and stick to it throughout your codebase

// functions are first class citizens - this means you can pass functions as arguments to other functions and return them from other functions

const add = (num1, num2) => {
    return num1 + num2;
};

const doSomeMath = (num1, num2, mathFunction) => {
    return mathFunction(num1, num2);
};

const result = doSomeMath(1, 2, add);
console.log(result); // 3