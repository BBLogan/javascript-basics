// Arrays are very similar to lists in python - they are a collection of values - can be any data type and can be mixed or of any type
// Create an array using the square brackets and separate the values with commas [value1, value2, value3] <- this is the index of the value you want to access
// Just like python JS is zero indexed - the first value is at index 0
// Remember to run the code blocks with node arrays.js

const names = ["Alexander", "Kate", "Ollie", "Angela"];
console.log(names[0]); // "Alexander"

const ages = [32, 30, 2, 0];
console.log(ages[2]); // 2

// We can get the length of an array using the length property
console.log(names.length); // 4

// We can add values to an array using the push method
names.push("Rebecca");
console.log(names); // ["Alexander", "Kate", "Ollie", "Angela", "Rebecca"]

// We can remove values from an array using the pop method
console.log(names); // ["Alexander", "Kate", "Ollie", "Angela", "Rebecca"]
names.pop();
console.log(names); // ["Alexander", "Kate", "Ollie", "Angela"]