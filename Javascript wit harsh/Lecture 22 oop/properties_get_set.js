// Constructor function
// It is used to create multiple User objects.

function User(email, password) {

    // These are internal/private-style properties.
    // "_" is commonly used to indicate that these
    // properties should be accessed through getters/setters.

    this._email = email;
    this._password = password;


    // --------------------------------------------------
    // Creating a custom "email" property
    // --------------------------------------------------

    Object.defineProperty(this, 'email', {

        // GETTER
        // This function runs automatically when we write:
        // chai.email

        get: function() {

            // Return the email in uppercase.
            return this._email.toUpperCase();
        },


        // SETTER
        // This function runs automatically when we write:
        // chai.email = "newemail@gmail.com"

        set: function(value) {

            // Store the new value inside _email.
            this._email = value;
        }
    });


    // --------------------------------------------------
    // Creating a custom "password" property
    // --------------------------------------------------

    Object.defineProperty(this, 'password', {

        // GETTER
        // Runs when we access:
        // chai.password

        get: function() {

            // Return the password in uppercase.
            return this._password.toUpperCase();
        },


        // SETTER
        // Runs when we assign:
        // chai.password = "newpassword"

        set: function(value) {

            // Store the new password inside _password.
            this._password = value;
        }
    });
}


// --------------------------------------------------
// Creating an object using the User constructor
// --------------------------------------------------

const chai = new User("chai@chai.com", "chai");


// --------------------------------------------------
// Accessing the email property
// --------------------------------------------------

// Because "email" has a getter,
// the getter function automatically runs.
//
// It returns:
// "CHAI@CHAI.COM"

console.log(chai.email);

// Output
// CHAI@CHAI.COM
// How it works

// When you write:

// console.log(chai.email);

// JavaScript sees that email has a getter:

// get: function() {
//     return this._email.toUpperCase()
// }

// So internally, it does approximately:

// chai._email.toUpperCase()

// Therefore:

// chai@chai.com
//        ↓
// CHAI@CHAI.COM
// Getter vs Setter

// Getter → runs when you read a property:

// console.log(chai.email);

// ⬇️

// get: function() {
//     return this._email.toUpperCase();
// }

// Setter → runs when you change a property:

// chai.email = "trisha@gmail.com";

// ⬇️

// set: function(value) {
//     this._email = value;
// }

// Then:

// console.log(chai.email);

// Output:

// TRISHA@GMAIL.COM
// One important point

// You have:

// this._email = email;

// and:

// Object.defineProperty(this, "email", ...)

// These are two different properties:

// _email  → actual stored value
// email   → getter/setter interface

// Think of it like:

// chai.email
//      ↓
//    getter
//      ↓
// chai._email
//      ↓
// .toUpperCase()
//      ↓
// "CHAI@CHAI.COM"

// This is a common JavaScript technique for controlling how object properties are read and modified.