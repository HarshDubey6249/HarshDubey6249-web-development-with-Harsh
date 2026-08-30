// Creating a normal JavaScript object
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  // Method inside the object
  getUserDetails: function () {
    // Prints the current object
    // Here, `this` refers to the `user` object
    console.log(this);
  },
};

// Accessing object properties
// console.log(user.username);

// Calling the method
// console.log(user.getUserDetails());

// In the browser, `this` at the top level usually refers to the Window object
// console.log(this);


// --------------------------------------------------
// Constructor Function
// --------------------------------------------------

// A constructor function is used to create multiple objects
// with the same properties and methods.

function User(username, loginCount, isLoggedIn) {

  // `this` refers to the new object created using `new`
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // Creating a method for each User object
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // Returning the newly created object
  // When using `new`, JavaScript automatically returns `this`,
  // so this line is generally not necessary.
  return this;
}


// --------------------------------------------------
// Creating Objects using the `new` Keyword
// --------------------------------------------------

// `new User(...)` does the following:
//
// 1. Creates a new empty object
// 2. Sets `this` to that new object
// 3. Connects the new object to User.prototype
// 4. Executes the User function
// 5. Returns the new object

const userOne = new User("hitesh", 12, true);

const userTwo = new User("ChaiAurCode", 11, false);


// --------------------------------------------------
// Constructor Property
// --------------------------------------------------

// Every object created using a constructor has a
// `constructor` property through its prototype.
//
// Since userOne was created using `new User()`,
// its constructor points back to the User function.

console.log(userOne.constructor);


// Display the complete userTwo object
// console.log(userTwo);


// Call the greeting method
// userOne.greeting();
// userTwo.greeting();