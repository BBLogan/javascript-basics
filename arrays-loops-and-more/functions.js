// Functions in JS are very similar to functions in Python - they're blocks of code you can call from anywhere in your code and executed
// Create a function using the function keyword
// You can call a function using the function name followed by curved brackets ()
// The functions code block is put inside curly brackets {}
// Remember to run the code blocks with node functions.js

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
