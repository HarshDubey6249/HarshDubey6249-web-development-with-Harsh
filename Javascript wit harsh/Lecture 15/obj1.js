// Create a unique Symbol
const mySum = Symbol("myKey");

// Create an object
const user = {
    name: "Harsh",                      // Normal property
    "full Name": "harsh Dubey",         // Property with space (access using [])
    age: 18,
    location: "jaipur",
    email: "harsh@google.com",
    isLocationIn: false,
    lastLoginDays: ["Mondays", "saturdays"],

    // Symbol property
    [mySum]: "mykey"
};

// Access using dot notation
// console.log(user.name); // Harsh

// ❌ Doesn't work because property name contains a space
// console.log(user.full Name);

// ✅ Correct way to access a property with spaces
// console.log(user["full Name"]);

// Access Symbol property
// console.log(user[mySum]); // mykey

// Check the data type of the Symbol property's value
// console.log(typeof user[mySum]); // string

// Print the complete object
// console.log(user);

// Add a function (method) to the object
// user.greeting1 = function () {
//     console.log("Hi, thank you so much");
// };

// Call the method
// user.greeting1();

// ❌ Wrong: This freezes the string "email", not the object
// Object.freeze("email");

// ✅ Correct: Freeze the entire object
Object.freeze(user);

// Try to modify the email after freezing
// This will not work because the object is frozen
user.email = "jfqgf@gmail";

// Email remains unchanged
console.log(user.email); // hitesh@google.com

// Add another method using object data
// user.greeting2 = function () {
//     console.log(`Hi, thank you so much ${this.name}`);
// };

// Call the method
// user.greeting2();