console.log("Hi, I am Harsh. In this lecture, we are going to learn about functions.");

// ----------------------------
// Basic Function
// ----------------------------

// Function declaration
function printHello() {
    console.log("Hello friends!");
}

// Just writing the function name does NOT execute it.
// printHello

// To execute (call) the function, use parentheses.
// printHello();
// printHello();
// printHello();


// ----------------------------
// Function with Parameters
// ----------------------------

// Function that takes two parameters and prints their sum.
function sumOfNumber(num1, num2) {
    console.log(num1 + num2);
}

// Calling without arguments results in NaN because
// undefined + undefined = NaN.
// sumOfNumber();

// Correct way:
// sumOfNumber(3, 4);


// ----------------------------
// Why Return is Important
// ----------------------------

// Trying to store the result in a variable.

// const sum = sumOfNumber(3, 4);
// console.log(sum);

// Output:
// 7
// undefined

// Why undefined?
// Because the function only prints the result.
// It does NOT return anything.

// Correct version:

// function sumOfNumber(num1, num2) {
//     return num1 + num2;
// }

// const sum = sumOfNumber(3, 4);
// console.log(sum);   // 7


// --------------------------------------------------
// Login User Example
// --------------------------------------------------

// Function with a default parameter.
// If no username is passed, "sam" is used.
function loginUserMessage(userName = "sam") {

    // Validate the username.
    // 1. It must be a string.
    // 2. It must not be empty.
    if (typeof userName !== "string" || !userName) {
        console.log("Please enter a valid username.");
        return; // Exit the function.
    }

    // Display the login message.
    console.log(`${userName} is logged in successfully.`);
}


// ----------------------------
// Function Calls
// ----------------------------

// No argument passed.
// Since a default value exists, "sam" is used.
loginUserMessage();
// Output:
// sam is logged in successfully


// Passing a valid username.
loginUserMessage("harsh");
// Output:
// harsh is logged in successfully


// Even though this is a string, it is not a meaningful username.
// The current validation only checks whether it is a non-empty string.
loginUserMessage("12");
// Output:
// 12 is logged in successfully

// If you want to allow only alphabetic usernames,
// you'll need additional validation (for example, using a regular expression).console.log("HI I am harsh in this lecture we are going to learn about function ");

// --------------------------------------
// Basic Function Example
// --------------------------------------

function printHello() {
    console.log("hello friends ");
}

// Just writing the function name does NOT call it.
// printHello

// Use parentheses () to call (execute) the function.
// printHello();
// printHello();
// printHello();


// --------------------------------------
// Function with Parameters
// --------------------------------------

// Function that takes two arguments and prints their sum.
function sumOfNumber(num1, num2) {
    console.log(num1 + num2);
}

// Calling without arguments prints NaN because
// undefined + undefined = NaN.
// sumOfNumber();

// Correct way:
// sumOfNumber(3, 4);


// --------------------------------------
// Why Return is Important
// --------------------------------------

// If we try to store the result in a variable:

// const sum = sumOfNumber(3,4);
// console.log(sum);

// Output:
// 7
// undefined

// Why undefined?
// Because the function only prints the sum.
// It does not return any value.

// To store the result, use return.

// function sumOfNumber(num1, num2) {
//     return num1 + num2;
// }

// const sum = sumOfNumber(3,4);
// console.log(sum); // 7


// --------------------------------------
// Function with Default Parameter
// --------------------------------------

// If no username is passed,
// the default value "sam" will be used.
function loginUserMessage(userName = "sam") {

    // Validate the username.
    // It must be a non-empty string.
    if (typeof userName !== "string" || !userName) {

        console.log("please enter valid username");
        return; // Stop the function if validation fails.
    }

    // Print the login success message.
    console.log(`${userName} is login successfully`);
}


// --------------------------------------
// Function Calls
// --------------------------------------

// No argument is passed.
// Since a default value exists, "sam" is used.
loginUserMessage();

// Passing a valid username.
loginUserMessage("harsh");

// Even "12" will work because it is a string.
// Currently, we only check whether the value
// is a non-empty string, not whether it contains
// only alphabetic characters.