// Parent class
class User {
  // Constructor runs when a new User object is created
  constructor(username) {
    this.username = username;
  }

  // Normal instance method
  // It can be called using an object
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // Static method
  // It belongs to the User class, NOT to User objects
  static createId() {
    return `123`;
  }
}


// Create an object of User
const hitesh = new User("hitesh");

// ❌ This will NOT work
// createId() is static, so it cannot be accessed
// through an object.
//
// console.log(hitesh.createId());


// ✅ Correct way to call a static method
console.log(User.createId());


// Teacher inherits from User
class Teacher extends User {
  constructor(username, email) {
    // Call the parent class constructor
    super(username);

    // Add Teacher-specific property
    this.email = email;
  }
}


// Create a Teacher object
const iphone = new Teacher("iphone", "i@phone.com");

// ❌ This will NOT work
// Static methods are not available through instances.
//
// console.log(iphone.createId());


// ✅ Static methods are inherited by the child class
// and can be called using the child class itself.
console.log(Teacher.createId());