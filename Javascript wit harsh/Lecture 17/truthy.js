// ==============================
// Truthy & Falsy Values
// ==============================

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have a user email");
}


// ==============================
// Falsy Values
// ==============================

// false
// 0
// -0
// 0n (BigInt)
// ""
// null
// undefined
// NaN


// ==============================
// Truthy Values
// ==============================

// "0"
// "false"
// " " (string with a space)
// []
// {}
// function () {}


// ==============================
// Check if an Array is Empty
// ==============================

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// ==============================
// Check if an Object is Empty
// ==============================

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// ==============================
// Nullish Coalescing Operator (??)
// ==============================

// Returns the first value that is NOT null or undefined.

let val1;

// val1 = 5 ?? 10;             // 5
// val1 = null ?? 10;          // 10
// val1 = undefined ?? 15;     // 15
val1 = null ?? 10 ?? 20;       // 10

console.log(val1);


// ==============================
// Ternary Operator
// ==============================

// Syntax:
// condition ? expressionIfTrue : expressionIfFalse;

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80");