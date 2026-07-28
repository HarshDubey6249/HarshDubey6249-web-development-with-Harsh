// ================= Object =================

const user = {
    username: "harsh",
    price: 999,

    // Regular function inside an object
    // Here, 'this' refers to the object that called the method.
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};

// user.welcomeMessage();
// Output:
// harsh, welcome to website
// { username: "harsh", price: 999, welcomeMessage: f }

// user.username = "sam";
// user.welcomeMessage();
// Output:
// sam, welcome to website



// ================= Global this =================

// console.log(this);

// In a browser:
// this --> Window object

// In Node.js:
// this --> {} (empty object at the top level)



// ================= Regular Function =================

// function chai() {
//     let username = "harsh";

//     // 'this' refers to the global object (browser)
//     // or module object (Node.js), NOT local variables.
//     console.log(this.username);
// }

// chai();

// Output:
// undefined

// Why?
// username is a local variable, not a property of 'this'.



// ================= Function Expression =================

// const chai = function () {
//     let username = "harsh";
//     console.log(this.username);
// };

// chai();

// Output:
// undefined

// Works exactly like a normal function regarding 'this'.



// ================= Arrow Function =================

const chai = () => {
    let username = "harsh";

    // Arrow functions DO NOT have their own 'this'.
    // They inherit 'this' from the surrounding (lexical) scope.
    console.log(this);
};

// chai();

// Browser:
// Window

// Node.js:
// {}



// ================= Arrow Function Returns =================

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };



// Implicit return (single expression)
// const addTwo = (num1, num2) => num1 + num2;



// Implicit return using parentheses
// const addTwo = (num1, num2) => (num1 + num2);



// Returning an object
// Object literals must be wrapped in parentheses.
const addTwo = (num1, num2) => ({ username: "harsh" });

console.log(addTwo(3, 4));

// Output:
// { username: "harsh" }



// ================= Array Example =================

// const myArray = [2, 5, 3, 7, 8];

// Arrow functions are commonly used with array methods.

// myArray.forEach((item) => {
//     console.log(item);
// });