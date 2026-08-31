// Creating a User object
const User = {

    // "_" is commonly used to indicate an internal property.
    // This stores the actual email value.
    _email: 'h@hc.com',

    // This stores the actual password value.
    _password: "abc",


    // --------------------------------------------------
    // GETTER
    // --------------------------------------------------

    // When we access:
    // User.email
    //
    // JavaScript automatically calls this getter.

    get email() {

        // Get the value from _email
        // and convert it to uppercase.

        return this._email.toUpperCase();
    },


    // --------------------------------------------------
    // SETTER
    // --------------------------------------------------

    // When we write:
    // User.email = "chai@chai.com"
    //
    // JavaScript automatically calls this setter.

    set email(value) {

        // Store the new value inside _email.
        this._email = value;
    }
};


// --------------------------------------------------
// Object.create()
// --------------------------------------------------

// Object.create(User) creates a NEW object.
//
// The newly created object "tea" has User as its
// prototype.
//
// So JavaScript can look inside User when we access
// properties/methods that don't directly exist on tea.

const tea = Object.create(User);


// --------------------------------------------------
// Accessing email
// --------------------------------------------------

// "email" does NOT directly exist on tea.
//
// JavaScript searches tea first.
// It doesn't find email.
//
// Then JavaScript searches tea's prototype,
// which is User.
//
// It finds the email getter in User.
//
// The getter runs automatically.

console.log(tea.email);


// Output
// H@HC.COM
// How Object.create(User) works

// The important part is:

// const tea = Object.create(User);

// Think of it like this:

//              User
//               ↑
//               │ prototype
//               │
//              tea

// tea doesn't have its own email property, so JavaScript looks up the prototype:

// tea.email
//    ↓
// Does tea have email?
//    ↓
// No
//    ↓
// Check User
//    ↓
// User has email getter
//    ↓
// get email()
//    ↓
// this._email.toUpperCase()
//    ↓
// "H@HC.COM"
// You can also use the setter

// For example:

// tea.email = "chai@chai.com";

// console.log(tea.email);

// Output:

// CHAI@CHAI.COM

// What's interesting is that the setter:

// set email(value) {
//     this._email = value;
// }

// uses this.

// Since you called:

// tea.email = "chai@chai.com";

// this refers to tea, so it effectively creates:

// tea._email = "chai@chai.com";

// Therefore, after the assignment:

// User._email → "h@hc.com"
// tea._email  → "chai@chai.com"

// This is a key concept for understanding prototypes, getters/setters, and Object.create() in JavaScript.