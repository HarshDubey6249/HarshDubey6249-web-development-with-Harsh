// Parent class
class User {
  // Constructor is called automatically when an object is created
  constructor(username) {
    // 'this' refers to the newly created object
    this.username = username;
  }

  // Method available to User objects
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}


// Child class
// Teacher inherits all properties and methods from User
class Teacher extends User {

  // Constructor of the Teacher class
  constructor(username, email, password) {

    // 'super()' calls the constructor of the parent class (User)
    // It passes username to the User constructor
    super(username);

    // Add Teacher-specific properties
    this.email = email;
    this.password = password;
  }

  // Method specific to Teacher
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}


// Create an object of Teacher
const chai = new Teacher(
  "chai",
  "chai@teacher.com",
  "123"
);

// Teacher inherits logMe() from User
chai.logMe();


// Create an object directly from User
const masalaChai = new User("masalaChai");

// Call User's method
masalaChai.logMe();


// Check whether chai is an instance of User
// Teacher extends User, so this returns true
console.log(chai instanceof User);