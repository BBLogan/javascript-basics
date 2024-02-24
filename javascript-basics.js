// this is a comment in javascript

// myScript.js
let greeting = "Salutations, friends!"; //<- this is the initial declaration
greeting = "Hey handsome, coding all by yourself?"; //<- this is the reassignment of the declared function
const pi = 3.1415992653589793; // to make and change variables use let and const DO NOT use var (old & outdated)
someVarName = "Any value"; //<- no declaration but still technically correct pls use LET or CONST only DO NOT USE VAR

// naming conventions - camelCase <- always lower case starting and captial for the next word(s)
// Camel Case - The convention in JavaScript
let isBirthday = true;
// # Snake Case - The convention in Python 
// is_birthday = True

// Semicolons - EACH JS STATEMENT SHOULD END WITH A ; <- need this as JS ignores line breaks & indentation during execution eg the following 2 code blocks are the same:
let someVar = "Hello world";
// white space here
    let otherVar = "wow"; // <- indented
// This runs exactly the same as what we have above
let someVar = "Hello world!"; let otherVar = "wow";
// Just cause we can leave out whitespace - doesn't mean we shouls - also remember to indent your code & use line breaks cause it makes code easier to read

// Strings - be consistent - if you start using '' (single) or "" (double) keep going with it throughout your code / project - meaning you can use both but choose one and stick to it
let name = "Alexander";
let greeting = 'Hello';
// You can combine strings using + <- called a concatenation and its the same as in Python
let name = "Alexander";
let greeting = 'Hello';

let message = greeting + " " + name; // "Hello Alexander"
// Better way to combine strings in JS is to use template literal - very like Python's f-strings. Use them to insert variables into strings - uses the back tick (`) instead of single or double quotes
let name = "Alexander";
let greeting = 'Hello';

let message = `${greeting} ${name}`; // "Hello Alexander"

// Numbers - pretty much the same in JS as in python - can be integers or floats and you can perform mathematical operations on them
let x = 5;
let y = 2.5;

let sum = x + y; // 7.5
let product = x * y; // 12.5

// Booleans - same as in Python - can be either True or False & use them to control the flow of your program. In JS you must NOT use captials - they're true and flase
let isBirthday = true;
let isWeekend = false;