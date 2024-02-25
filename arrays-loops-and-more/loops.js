// use loops to run a block of code multiple times
// for now we're going to focus on the for loop and will touch on some others when we start REACT
// with the following code you should see the numbers 0 to 9 printed to the terminal

/** 
 * the for loop has three parts, the initial expression, the condition and the increment expression
 * the initial expression runs once at the start of the loop "let number = 0;" - here we are setting the starting number to 0
 * the condition is checked before each iteration of the loop "number < 10;" - here we are checking if the number is less than 10
 * the increment runs after each iteration of hte loop "number++" - here we are adding 1 to the number
 */
for (let number = 0; number < 10; number++) {
    console.log(number);
}

// we can also use a for loop to iterate over an array (or looping muliple times)
// we can use the length property of the array to check how many items are in the array 
// we can then use the index to access each item in the array
const numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// another way to write a for loop is using the of keyword - this is a newer way of writing a for loop in JS and is closer to what we're used to from Python
// its easier to read and write and less prone to errors
const countries = ["Australia", "New Zealand", "Japan", "Indonesia"];
for (const countrty of countries) {
    console.log(countrty);
}