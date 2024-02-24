// Objects in JavaScript are similar to dictionaries in Python
// They're a collection of key-value pairs
// Keys are ALWAYS strings and the value can be any data type
// Create an object using the curly brackets and separate the key-value pairs with commas {key1: value1, key2: value2, key3: value3}

// Remember to run the code blocks with node objects.js

// Defining an object
const person = {
    name: "Alexander",
    age: 32,
    likesCoding: true
};

// Console.log is a function which prints the value inside the brackets to the terminal , just like Pythons print () - the consol is part of the web browser right click > inspect > console and helps with debugging
console.log(person["name"]); // "Alexander"
console.log(person.age); // 32

// Object values cna be any data type, including other objects (remember nesting in Python)?
// You can nest objects inside other objects or nest arrays inside objects or nest objects inside arrays
// You can nest as many levels deep as you like - update your objects.js file with the following code:
const person = {
    name: "Alexander",
    age: 32,
    likesCoding: true,
    address: {
        street: "123 Fake St",
        suburb: "Fakeville",
        postcode: 1234
    }
};

console.log(person.address.street); // "123 Fake St"
console.log(person["address"]["suburb"]); // "Fakeville"
// We can add values to an object using dot notation or square brackets
person.address.state = "NSW";
person["address"]["country"] = "Australia";
console.log(person.address); // { street: "123 Fake Street", suburb: "Fakeville", postcode: 1234, state: "NSW", country: "Australia" }
