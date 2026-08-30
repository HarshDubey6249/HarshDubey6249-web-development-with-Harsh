// ============================================================
// FUNCTIONS ARE ALSO OBJECTS IN JAVASCRIPT
// ============================================================


// ------------------------------------------------------------
// Creating a normal function
// ------------------------------------------------------------

function multipleBy5(num) {

    // The function receives a number
    // and returns that number multiplied by 5.

    return num * 5;
}


// ------------------------------------------------------------
// Adding a custom property to a function
// ------------------------------------------------------------

// IMPORTANT:
//
// In JavaScript, functions are also objects.
//
// Therefore, we can add properties to a function.

multipleBy5.power = 2;


// Calling the function

console.log(multipleBy5(5));

// Output:
// 25
//
// The function is executed normally:
// 5 * 5 = 25


// Accessing the custom property

console.log(multipleBy5.power);

// Output:
// 2
//
// We added this property manually:
// multipleBy5.power = 2;


// Accessing the prototype property

console.log(multipleBy5.prototype);

// Output:
//
// {
//     constructor: multipleBy5
// }
//
// Every normal function that can be used as a constructor
// has a prototype object.


// ============================================================
// CONSTRUCTOR FUNCTION
// ============================================================


// A constructor function is normally written with a
// capitalized name by convention.
//
// Example:
// User
// CreateUser
// Car
//
// Here we are using createUser.

function createUser(username, score) {

    // "this" will refer to the NEW OBJECT created by "new".

    this.username = username;
    this.score = score;
}


// ============================================================
// ADDING METHODS TO THE CONSTRUCTOR'S PROTOTYPE
// ============================================================


// We don't need to create a separate increment() function
// for every user object.
//
// Instead, we put the method on createUser.prototype.
//
// All objects created using:
//
// new createUser()
//
// can access this method through the prototype chain.

createUser.prototype.increment = function () {

    // "this" refers to the particular object that calls
    // the increment() method.

    this.score++;
};


// Example:
//
// chai.increment();
//
// In this case:
//
// this = chai
//
// So:
//
// chai.score++;
//
// The score increases by 1.


// ============================================================
// ANOTHER PROTOTYPE METHOD
// ============================================================

createUser.prototype.printMe = function () {

    // "this.score" refers to the score of the current object.

    console.log(`price is ${this.score}`);
};


// ============================================================
// CREATING AN OBJECT USING "new"
// ============================================================


// The "new" keyword is very important here.

const chai = new createUser("chai", 25);


// Conceptually, JavaScript does something like:
//
// 1. Creates a new empty object.
//
// 2. Connects that object's prototype to:
//    createUser.prototype
//
// 3. Calls createUser() with:
//    this = new object
//
// 4. The constructor assigns:
//
//    this.username = "chai"
//    this.score = 25
//
// 5. The new object is returned.
//
// So chai roughly becomes:
//
// {
//     username: "chai",
//     score: 25
// }
//
// And internally:
//
// chai
//   ↓
// createUser.prototype
//   ↓
// Object.prototype
//   ↓
// null


// ============================================================
// IMPORTANT: WITHOUT "new"
// ============================================================


// Your original code was:
//
// const tea = createUser("tea", 250);
//
// This is WRONG if you want tea to be another createUser object.
//
// createUser() is just a normal function call here.
//
// It does NOT create a new object automatically.


// Correct version:

const tea = new createUser("tea", 250);


// Now tea is another createUser instance.
//
// tea looks like:
//
// {
//     username: "tea",
//     score: 250
// }
//
// And its prototype is:
//
// tea
//  ↓
// createUser.prototype
//  ↓
// Object.prototype
//  ↓
// null


// ============================================================
// USING PROTOTYPE METHODS
// ============================================================


// chai has no own "printMe" property.
//
// But JavaScript searches the prototype chain:
//
// chai
//   ↓
// createUser.prototype
//
// It finds printMe() there.
//
// Therefore this works:

chai.printMe();

// Output:
// price is 25


// Increment chai's score

chai.increment();


// Now chai.score becomes:
//
// 25 + 1 = 26

console.log(chai.score);

// Output:
// 26


// Print again

chai.printMe();

// Output:
// price is 26


// ============================================================
// USING THE METHOD WITH TEA
// ============================================================

tea.printMe();

// Output:
// price is 250


tea.increment();

console.log(tea.score);

// Output:
// 251


// ============================================================
// WHY USE PROTOTYPE?
// ============================================================

/*

Suppose we create 1000 users.

If we define the methods directly inside the constructor:

function createUser(username, score) {

    this.username = username;
    this.score = score;

    this.increment = function () {
        this.score++;
    };

    this.printMe = function () {
        console.log(`price is ${this.score}`);
    };
}


Then every new object gets its own copy of:

increment()
printMe()


That can waste memory.


Instead, we use:

createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
};


Now all createUser objects share the same methods
through createUser.prototype.


// ============================================================
// PROTOTYPE CHAIN
// ============================================================


const chai = new createUser("chai", 25);


The relationship is:

chai
  |
  ↓
createUser.prototype
  |
  ↓
Object.prototype
  |
  ↓
null


When we execute:

chai.printMe();


JavaScript searches:

STEP 1:
Does chai have printMe?

NO.


STEP 2:
Does createUser.prototype have printMe?

YES.


So JavaScript executes it.


============================================================
// "this" IN PROTOTYPE METHODS
============================================================


createUser.prototype.increment = function () {
    this.score++;
};


When we write:

chai.increment();


"this" refers to chai.


So internally:

this.score++;


becomes:

chai.score++;


If we write:

tea.increment();


then:

this = tea


So:

this.score++;


becomes:

tea.score++;


This is why the SAME prototype method works for
different objects.


============================================================
// WHAT DOES "prototype" MEAN?
============================================================


When we create:

function createUser() {}


JavaScript gives the function a prototype property:

createUser.prototype


This prototype is an object.

We can put shared properties and methods inside it:

createUser.prototype.increment = function () {
    this.score++;
};


createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
};


Objects created with:

new createUser()


can access those methods.


============================================================
// WHAT DOES "new" DO?
============================================================


When we write:

const chai = new createUser("chai", 25);


JavaScript performs approximately these four steps:


STEP 1 — CREATE OBJECT
----------------------

A new empty object is created.


STEP 2 — LINK PROTOTYPE
-----------------------

The new object's prototype is linked to:

createUser.prototype


So:

chai
  ↓
createUser.prototype


STEP 3 — CALL CONSTRUCTOR
-------------------------

createUser("chai", 25)


is executed with:

this = chai


Therefore:

this.username = username;
this.score = score;


becomes:

chai.username = "chai";
chai.score = 25;


STEP 4 — RETURN OBJECT
----------------------

The newly created object is returned and assigned to:

const chai


============================================================
// SIMPLE VISUALIZATION
============================================================


function createUser(username, score) {
    this.username = username;
    this.score = score;
}


createUser.prototype.increment = function () {
    this.score++;
};


createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
};


const chai = new createUser("chai", 25);


Memory relationship:


              createUser
                   |
                   | .prototype
                   ↓
        ┌─────────────────────┐
        │ createUser.prototype│
        │                     │
        │ increment()         │
        │ printMe()           │
        └─────────────────────┘
                   ↑
                   |
                   |
                 chai
          username: "chai"
          score: 25


chai does NOT need its own copy of increment()
or printMe().

It finds them through the prototype.


============================================================
// instanceof
// ============================================================


Because chai was created using:

new createUser()


we can check:

console.log(chai instanceof createUser);

// true


And:

console.log(tea instanceof createUser);

// true


This means chai and tea were created through
createUser's constructor/prototype relationship.


============================================================
// IMPORTANT DIFFERENCE
// ============================================================


const chai = new createUser("chai", 25);


This creates a proper object.


But:

const tea = createUser("tea", 250);


This simply calls the function.

It does NOT create a new createUser object.


Therefore, when using constructor functions,
remember:

new createUser(...)


not:

createUser(...)


============================================================
// FINAL KEY POINTS
// ============================================================


1. Functions are objects in JavaScript.

2. Functions can have properties.

   multipleBy5.power = 2;


3. Constructor functions can have a prototype.

   createUser.prototype


4. We can put shared methods on the prototype.

   createUser.prototype.increment = function () {
       this.score++;
   };


5. Objects created using "new" can access those methods.

6. "this" refers to the object calling the method.

7. "new" creates a new object and connects it to the
   constructor's prototype.

8. Prototype methods are shared rather than copied into
   every object.

9. Use "new" when creating objects with a constructor function.

10. JavaScript classes use this same prototype mechanism
    underneath.

*/