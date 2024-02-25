// use conditionals to check if a condition is true or false 
// if true then the code block runs
// if not then the code block is skipped and we run some other code block 
// we use conditionals to control the flow of our code

const user = {
    name: "Älexander",
    age: 32,
    likesCoding: true,
};

// we can use an if statement to check if a condition is true
if (user.likesCoding) {
    console.log("Alexander likes coding");
} else {
    console.log("Alexander doesn't like coding");
}

// we can also write an if statement without the else block
if (user.age >= 18) {
    console.log("Alexander is an adult");
}

// we can use an if statement to check if a condition is false by using the not operator !
if (!user.likesCoding) {
    console.log("Alexander doesn't like coding");
} else {
    console.log("Alexander likes coding");
}

// you can chain mulitple if statements together using the else if keyword
if (user.age < 18) {
    console.log("Alexander is a child");
} else if (user.age >= 18 && user.age < 65) {
    console.log("Alexander is an adult");
} else {
    console.log("Alexander is a pensioner");
}

// we can use the or operator || to check if one of two conditions is true
if (user.age < 18 || user.age >= 65) {
    console.log("Alexander is not an adult");
}    else {
    console.log("Alexander is an adult");
}

// we can use the and operator && to check if two conditions are true
if (user.age >= 18 && user.likesCoding) {
    console.log("Alexander is an adult and likes coding");
} else {
    console.log("Alexander likes coding");
}

// we can also write an if statement using a ternary operator
// a ternary operator is a shorter way of writing an if statement
user.likesCoding ? console.log("Alexander likes coding") : 
    console.log("Alexander doesn't like coding");
// "Alexander likes coding"