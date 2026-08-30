# JavaScript and Classes

## OOP (Object-Oriented Programming)

Object-Oriented Programming (OOP) is a programming approach where we organize code around **objects**.

An object can contain:

- **Properties** → data/state
- **Methods** → functions/behavior

### Example

```javascript
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  }
};

console.log(user.username);
user.getUserDetails();
```

Here:

- `username`, `loginCount`, and `signedIn` are **properties**.
- `getUserDetails()` is a **method**.
- `this` refers to the object that is calling the method.

---

# Object

An **object** is a collection of properties and methods.

### Properties

Properties represent the data or state of an object.

```javascript
const user = {
  username: "hitesh",
  age: 25,
  isLoggedIn: true
};
```

The properties are:

```text
username
age
isLoggedIn
```

### Methods

Methods are functions stored inside an object.

```javascript
const user = {
  username: "hitesh",

  greeting: function () {
    console.log(`Welcome ${this.username}`);
  }
};

user.greeting();
```

Output:

```text
Welcome hitesh
```

---

## Objects Can Use Built-in Methods

JavaScript provides many built-in objects and methods.

For example:

```javascript
const name = "Hitesh";

console.log(name.toLowerCase());
```

Output:

```text
hitesh
```

Here:

- `name` is a string value.
- `toLowerCase()` is a method available through the String object's prototype.

Other examples:

```javascript
const text = "hello";

console.log(text.toUpperCase());
console.log(text.length);
```

---

# Why Use OOP?

OOP is useful when an application becomes large and contains many related pieces of data and behavior.

Without OOP, code can become difficult to organize:

```javascript
const userOneName = "Hitesh";
const userOneLoginCount = 8;

const userTwoName = "ChaiAurCode";
const userTwoLoginCount = 11;
```

With objects:

```javascript
const userOne = {
  username: "Hitesh",
  loginCount: 8
};

const userTwo = {
  username: "ChaiAurCode",
  loginCount: 11
};
```

OOP becomes even more useful when we need to create many objects with the same structure.

For example:

```javascript
const userOne = new User("Hitesh", 8);
const userTwo = new User("ChaiAurCode", 11);
const userThree = new User("Rahul", 5);
```

Instead of writing the same structure repeatedly, we can define it once.

### Main benefits of OOP

1. **Code organization**
2. **Code reusability**
3. **Maintainability**
4. **Encapsulation**
5. **Inheritance**
6. **Abstraction**
7. **Polymorphism**

---

# Parts of OOP in JavaScript

Important concepts to understand are:

1. Object Literal
2. Constructor Function
3. Prototypes
4. Classes
5. Instances
6. `new`
7. `this`

---

# 1. Object Literal

An object literal is the simplest way to create an object.

```javascript
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  greeting: function () {
    console.log(`Welcome ${this.username}`);
  }
};
```

We can access properties using:

```javascript
console.log(user.username);
console.log(user.loginCount);
```

We can call methods using:

```javascript
user.greeting();
```

Output:

```text
Welcome hitesh
```

## Object Literal Syntax

```javascript
const objectName = {
  property: value,

  method: function () {
    // code
  }
};
```

### Limitation of Object Literals

If we need 100 users, creating each object manually is repetitive.

```javascript
const userOne = {
  username: "Hitesh",
  loginCount: 8
};

const userTwo = {
  username: "Rahul",
  loginCount: 10
};

const userThree = {
  username: "Aman",
  loginCount: 5
};
```

A constructor function or class can solve this problem.

---

# 2. Constructor Function

A constructor function is a normal JavaScript function used with the `new` keyword to create multiple objects with the same structure.

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}
```

Now we can create objects:

```javascript
const userOne = new User("Hitesh", 8, true);
const userTwo = new User("Rahul", 10, false);
```

Each object has its own values.

```javascript
console.log(userOne.username);
console.log(userTwo.username);
```

Output:

```text
Hitesh
Rahul
```

---

# Understanding `new`

The `new` keyword is very important.

When we write:

```javascript
const userOne = new User("Hitesh", 8, true);
```

JavaScript performs several operations.

## Step 1: A new object is created

Conceptually:

```javascript
{}
```

## Step 2: `this` points to the new object

Inside the constructor:

```javascript
this.username = username;
```

`this` refers to the newly created object.

## Step 3: The constructor function executes

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}
```

## Step 4: The new object is connected to the constructor's prototype

This is important for JavaScript's prototype inheritance system.

## Step 5: The new object is returned

So:

```javascript
const userOne = new User("Hitesh", 8, true);
```

gives us a new `User` instance.

---

# `this` Keyword

`this` refers to the object associated with the current function call/context.

Example:

```javascript
const user = {
  username: "Hitesh",

  greeting: function () {
    console.log(this.username);
  }
};

user.greeting();
```

Output:

```text
Hitesh
```

Here:

```javascript
this.username
```

means:

```javascript
user.username
```

In a constructor function:

```javascript
function User(username) {
  this.username = username;
}
```

When called with:

```javascript
const userOne = new User("Hitesh");
```

`this` refers to `userOne`.

---

# Constructor Function with Methods

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}

const userOne = new User("Hitesh", 12, true);

userOne.greeting();
```

Output:

```text
Welcome Hitesh
```

---

# 3. Prototypes

Every JavaScript object can be connected to another object called its **prototype**.

The prototype is one of the most important parts of JavaScript's inheritance system.

For example:

```javascript
const user = {
  username: "Hitesh"
};
```

JavaScript can look for properties/methods through the object's prototype chain.

This is called **prototype-based inheritance**.

---

## Prototype Example

```javascript
function User(username) {
  this.username = username;
}

User.prototype.greeting = function () {
  console.log(`Welcome ${this.username}`);
};

const userOne = new User("Hitesh");
const userTwo = new User("Rahul");

userOne.greeting();
userTwo.greeting();
```

Output:

```text
Welcome Hitesh
Welcome Rahul
```

The `greeting` method is stored on:

```javascript
User.prototype
```

rather than being separately created for every object.

---

# Why Use Prototypes?

Consider:

```javascript
function User(username) {
  this.username = username;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}
```

If we create 1000 users, each object can get its own `greeting` function.

Instead:

```javascript
function User(username) {
  this.username = username;
}

User.prototype.greeting = function () {
  console.log(`Welcome ${this.username}`);
};
```

The method is shared through the prototype.

This is more memory-efficient and is an important part of JavaScript's object model.

---

# Prototype Chain

When JavaScript tries to find a property:

```javascript
userOne.greeting();
```

JavaScript first looks on:

```text
userOne
```

If it does not find `greeting`, JavaScript checks:

```text
User.prototype
```

If it still does not find it, JavaScript continues up the prototype chain.

Conceptually:

```text
userOne
   ↓
User.prototype
   ↓
Object.prototype
   ↓
null
```

This is called the **prototype chain**.

---

# 4. Classes

Classes provide a cleaner syntax for creating objects and working with inheritance.

Example:

```javascript
class User {
  constructor(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
  }

  greeting() {
    console.log(`Welcome ${this.username}`);
  }
}
```

Create an instance:

```javascript
const userOne = new User("Hitesh", 12, true);

userOne.greeting();
```

Output:

```text
Welcome Hitesh
```

---

# Constructor in a Class

The `constructor()` method runs automatically when a new object is created.

```javascript
class User {
  constructor(username, loginCount) {
    this.username = username;
    this.loginCount = loginCount;
  }
}

const userOne = new User("Hitesh", 12);
```

The constructor initializes the object's properties.

---

# Class Methods

Methods can be defined directly inside the class.

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  greeting() {
    console.log(`Welcome ${this.username}`);
  }

  login() {
    console.log(`${this.username} logged in`);
  }
}

const userOne = new User("Hitesh");

userOne.greeting();
userOne.login();
```

Output:

```text
Welcome Hitesh
Hitesh logged in
```

---

# Classes and Prototypes

JavaScript classes do not replace the prototype system.

Classes provide a cleaner syntax over JavaScript's existing prototype-based object model.

For example:

```javascript
class User {
  greeting() {
    console.log("Hello");
  }
}
```

The method is associated with:

```javascript
User.prototype
```

So:

```javascript
console.log(User.prototype);
```

shows the prototype object containing class methods.

---

# 5. Instances

An **instance** is an object created from a constructor or class.

Example:

```javascript
class User {
  constructor(username) {
    this.username = username;
  }
}

const userOne = new User("Hitesh");
const userTwo = new User("Rahul");
```

Here:

```text
User → class
userOne → instance
userTwo → instance
```

We can check:

```javascript
console.log(userOne instanceof User);
```

Output:

```text
true
```

---

# `new` and Instances

The `new` keyword is commonly used to create instances.

```javascript
const userOne = new User("Hitesh");
```

Here:

```text
User
  ↓
new
  ↓
new object
  ↓
userOne
```

---

# `constructor` Property

Objects created through a constructor have a relationship with that constructor.

Example:

```javascript
function User(username) {
  this.username = username;
}

const userOne = new User("Hitesh");

console.log(userOne.constructor);
```

The constructor points back toward the `User` function.

You can also check:

```javascript
console.log(userOne instanceof User);
```

Output:

```text
true
```

---

# The Four Pillars of OOP

The four commonly discussed pillars of OOP are:

1. **Abstraction**
2. **Encapsulation**
3. **Inheritance**
4. **Polymorphism**

---

# 1. Abstraction

Abstraction means **hiding unnecessary implementation details and exposing only what is needed**.

For example, when we use:

```javascript
console.log("Hello");
```

we do not need to know how the JavaScript engine internally sends the text to the console.

Another example:

```javascript
class Car {
  start() {
    this.#startEngine();
    console.log("Car started");
  }

  #startEngine() {
    console.log("Engine started internally");
  }
}

const car = new Car();

car.start();
```

The user only needs:

```javascript
car.start();
```

The internal engine-starting logic is hidden.

## Real-world example

When using an ATM:

```text
Insert card
    ↓
Enter PIN
    ↓
Choose withdrawal
    ↓
Receive money
```

You do not need to know the internal banking-system implementation.

That is abstraction.

---

# 2. Encapsulation

Encapsulation means **bundling data and behavior together and controlling access to internal data**.

Example:

```javascript
class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  login(password) {
    if (password === this.#password) {
      console.log("Login successful");
    } else {
      console.log("Invalid password");
    }
  }
}

const user = new User("Hitesh", "12345");

user.login("12345");
```

The private field:

```javascript
#password
```

cannot be accessed directly:

```javascript
console.log(user.#password);
```

This causes an error.

The class controls how the password is accessed.

### Abstraction vs Encapsulation

They are related but different.

**Abstraction:**

> Hide implementation complexity.

**Encapsulation:**

> Protect/bundle data and control access to it.

---

# 3. Inheritance

Inheritance allows one class to acquire properties and methods from another class.

Example:

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(`${this.username} logged in`);
  }
}

class Admin extends User {
  deleteUser() {
    console.log(`${this.username} deleted a user`);
  }
}

const admin = new Admin("Hitesh");

admin.login();
admin.deleteUser();
```

Output:

```text
Hitesh logged in
Hitesh deleted a user
```

`Admin` inherits from `User`.

Conceptually:

```text
User
 ↓
Admin
```

---

# `extends`

The `extends` keyword creates a class inheritance relationship.

```javascript
class Admin extends User {
}
```

This means `Admin` inherits from `User`.

---

# `super`

The `super` keyword is used to call the parent class constructor or methods.

Example:

```javascript
class User {
  constructor(username) {
    this.username = username;
  }
}

class Admin extends User {
  constructor(username, role) {
    super(username);
    this.role = role;
  }
}

const admin = new Admin("Hitesh", "Administrator");

console.log(admin.username);
console.log(admin.role);
```

Output:

```text
Hitesh
Administrator
```

`super(username)` calls the parent constructor.

---

# 4. Polymorphism

Polymorphism means **one interface or method name can behave differently depending on the object**.

Example:

```javascript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();
```

Output:

```text
Dog barks
Cat meows
```

The same method:

```javascript
speak()
```

has different behavior for different objects.

---

# Method Overriding

The example above demonstrates method overriding.

Parent:

```javascript
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
```

Child:

```javascript
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
```

The child provides its own implementation of `speak()`.

---

# Complete OOP Example

Here is an example combining multiple OOP concepts:

```javascript
class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  login(password) {
    if (password === this.#password) {
      console.log(`${this.username} logged in`);
    } else {
      console.log("Invalid password");
    }
  }

  getRole() {
    return "User";
  }
}

class Admin extends User {
  getRole() {
    return "Admin";
  }

  deleteUser() {
    console.log(`${this.username} deleted a user`);
  }
}

const user = new User("Hitesh", "12345");
const admin = new Admin("Rahul", "67890");

user.login("12345");
admin.login("67890");

console.log(user.getRole());
console.log(admin.getRole());

admin.deleteUser();
```

Output:

```text
Hitesh logged in
Rahul logged in
User
Admin
Rahul deleted a user
```

This example demonstrates:

- **Encapsulation** → `#password`
- **Inheritance** → `Admin extends User`
- **Polymorphism** → `getRole()` behaves differently
- **Abstraction** → users interact with methods rather than internal implementation

---

# Object-Oriented Programming Mental Model

A useful way to remember the concepts:

```text
                    OOP
                     |
          -----------------------
          |          |          |
       Objects    Classes    Prototypes
          |          |
       Instances     |
          |          |
         new       constructor
          |
         this
```

And the four pillars:

```text
              OOP
               |
     -----------------------
     |         |           |
 Abstraction Encapsulation
     |
  ----------------
  |              |
Inheritance   Polymorphism
```

---

# Object vs Class vs Instance

| Concept | Meaning | Example |
|---|---|---|
| Object | Collection of properties and methods | `{ username: "Hitesh" }` |
| Class | Blueprint for creating objects | `class User {}` |
| Constructor | Initializes a new object | `constructor()` |
| Instance | Object created from a class | `new User()` |
| Prototype | Object used for inheritance/property lookup | `User.prototype` |
| `new` | Creates a new instance | `new User()` |
| `this` | Refers to the current object/context | `this.username` |

---

# Constructor Function vs Class

## Constructor Function

```javascript
function User(username) {
  this.username = username;
}

User.prototype.greeting = function () {
  console.log(`Welcome ${this.username}`);
};

const user = new User("Hitesh");

user.greeting();
```

## Class

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  greeting() {
    console.log(`Welcome ${this.username}`);
  }
}

const user = new User("Hitesh");

user.greeting();
```

Both use JavaScript's prototype-based object model, but the class syntax is generally easier to read and organize.

---

# Quick Revision

## OOP

Object-Oriented Programming is a programming style based around objects containing data and behavior.

## Object

An object contains:

```text
Properties + Methods
```

## Object Literal

```javascript
const user = {
  username: "Hitesh"
};
```

## Constructor Function

```javascript
function User(username) {
  this.username = username;
}
```

## Prototype

```javascript
User.prototype.greeting = function () {
  console.log("Hello");
};
```

## Class

```javascript
class User {
  constructor(username) {
    this.username = username;
  }
}
```

## Instance

```javascript
const userOne = new User("Hitesh");
```

## `new`

Creates a new instance and establishes the prototype relationship.

## `this`

Refers to the relevant object/context. With `new`, it refers to the newly created instance.

## Four Pillars

```text
Abstraction
Encapsulation
Inheritance
Polymorphism
```

---

# Final Mental Model

Think of a **class as a blueprint**.

```text
              User Class
                  |
        ---------------------
        |                   |
     new User()          new User()
        |                   |
     userOne              userTwo
        |                   |
    Hitesh               Rahul
```

The class defines the structure and behavior.

The instances contain their own data.

Methods can be shared through the prototype.

Inheritance allows classes to reuse behavior.

Polymorphism allows inherited methods to behave differently.

Encapsulation protects internal data.

Abstraction hides unnecessary implementation details.

That is the foundation of **Object-Oriented Programming in JavaScript**.
