// ES6 Classes
// Classes provide a cleaner and easier syntax for creating objects
// and working with inheritance and methods.

class User {
  // Constructor runs automatically when a new object is created
  constructor(username, email, password) {
    // Assign values to the newly created object's properties
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method to encrypt the password
  encryptPassword() {
    return `${this.password}abc`;
  }

  // Method to change the username to uppercase
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

// Create a new object using the User class
const chai = new User("chai", "chai@gmail.com", "123");

// Call the methods using the chai object
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// =======================================================
// Behind the Scene
// =======================================================

// Before ES6 classes, JavaScript commonly used
// constructor functions and prototypes to achieve
// similar behavior.

// Constructor function
function User(username, email, password) {
  // Assign values to the current object
  this.username = username;
  this.email = email;
  this.password = password;
}

// Add encryptPassword() method to User's prototype
// This allows all User objects to share the same method
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

// Add changeUsername() method to User's prototype
// All User objects can access this method through the prototype chain
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

// Create a new object using the constructor function
// The 'new' keyword creates an object and connects it
// to User.prototype
const tea = new User("tea", "tea@gmail.com", "123");

// Call the prototype methods
console.log(tea.encryptPassword());
console.log(tea.changeUsername());