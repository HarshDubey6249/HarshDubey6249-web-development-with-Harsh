// ============================================================
// JAVASCRIPT PROTOTYPES
// ============================================================

// ------------------------------------------------------------
// Example: Adding a custom property/method to String prototype
// ------------------------------------------------------------

// let myName = "hitesh     ";
// let mychannel = "chai     ";

// At this point, trueLength() does not exist on String.
// We will create it later using String.prototype.

// console.log(myName.trueLength);


// ============================================================
// ARRAY AND OBJECT EXAMPLE
// ============================================================

let myHeros = ["thor", "spiderman"];

// myHeros is an Array.
// Arrays are actually objects in JavaScript.
// Therefore, arrays can access properties and methods
// through the prototype chain.


// ============================================================
// OBJECT
// ============================================================

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // This is a method inside the heroPower object.
    getSpiderPower: function () {

        // "this" refers to the object that calls this method.
        //
        // If we call:
        // heroPower.getSpiderPower()
        //
        // then "this" refers to heroPower.
        //
        // this.spiderman => "sling"

        console.log(`Spidy power is ${this.spiderman}`);
    }
};


// ============================================================
// OBJECT.PROTOTYPE
// ============================================================

// Object.prototype is the base prototype for most JavaScript objects.
//
// By adding a method to Object.prototype, that method becomes
// available to objects through the prototype chain.
//
// IMPORTANT:
// This means almost every normal object can access this method,
// including arrays, because arrays ultimately inherit from
// Object.prototype.

Object.prototype.hitesh = function () {

    console.log(`hitesh is present in all objects`);
};


// Now hitesh() is available through Object.prototype.
//
// Example:
//
// heroPower.hitesh();
//
// JavaScript first checks heroPower.
// If hitesh is not found there, JavaScript checks its prototype.
// Eventually it finds hitesh inside Object.prototype.


// ============================================================
// ARRAY.PROTOTYPE
// ============================================================

// Array.prototype contains methods that are available to arrays.
//
// For example:
//
// push()
// pop()
// map()
// filter()
// forEach()
//
// We can also add our own method to Array.prototype.

Array.prototype.heyHitesh = function () {

    console.log(`Hitesh says hello`);
};


// Since heyHitesh was added to Array.prototype,
// it can be accessed by arrays.

// myHeros.heyHitesh();


// ============================================================
// TESTING THE PROTOTYPE METHODS
// ============================================================

// heroPower.hitesh();
// Output:
// hitesh is present in all objects
//
// Why?
// heroPower is an object, and objects can access Object.prototype.


// myHeros.hitesh();
// Output:
// hitesh is present in all objects
//
// Why?
// myHeros is an array.
//
// Array
//   ↓
// Array.prototype
//   ↓
// Object.prototype
//
// Since hitesh() exists inside Object.prototype,
// the array can also access it.


// myHeros.heyHitesh();
// Output:
// Hitesh says hello
//
// Why?
// myHeros is an array and heyHitesh() exists inside
// Array.prototype.


// heroPower.heyHitesh();
//
// This will NOT work.
//
// heroPower is a normal object.
//
// Prototype chain:
//
// heroPower
//    ↓
// Object.prototype
//    ↓
// null
//
// JavaScript does NOT find heyHitesh() in Object.prototype
// because we added heyHitesh() specifically to Array.prototype.
//
// Therefore:
// TypeError: heroPower.heyHitesh is not a function


// ============================================================
// INHERITANCE USING PROTOTYPES
// ============================================================

// We can use prototypes to make one object inherit properties
// and methods from another object.


// Parent object

const User = {
    name: "chai",
    email: "chai@google.com"
};


// Another object

const Teacher = {
    makeVideo: true
};


// Another object

const TeachingSupport = {
    isAvailable: false
};


// TASupport object

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    // __proto__ creates a prototype relationship.
    //
    // Here TASupport inherits from TeachingSupport.
    //
    // Prototype chain:
    //
    // TASupport
    //     ↓
    // TeachingSupport
    //     ↓
    // Object.prototype
    //     ↓
    // null

    __proto__: TeachingSupport
};


// ============================================================
// TEACHER INHERITING FROM USER
// ============================================================

// Here Teacher gets User as its prototype.
//
// Prototype chain:
//
// Teacher
//    ↓
// User
//    ↓
// Object.prototype
//    ↓
// null
//
// Therefore Teacher can access:
//
// Teacher.makeVideo
// Teacher.name
// Teacher.email

Teacher.__proto__ = User;


// Now:

// console.log(Teacher.makeVideo);
// true

// console.log(Teacher.name);
// chai

// console.log(Teacher.email);
// chai@google.com


// ============================================================
// MODERN PROTOTYPE SYNTAX
// ============================================================

// __proto__ works, but it is generally better to use
// Object.setPrototypeOf() when explicitly setting prototypes.


// Here we make:
//
// TeachingSupport
//        ↓
//      Teacher
//
// So TeachingSupport inherits properties from Teacher.

Object.setPrototypeOf(TeachingSupport, Teacher);


// After this, the prototype chain becomes:
//
// TeachingSupport
//        ↓
//      Teacher
//        ↓
//       User
//        ↓
// Object.prototype
//        ↓
//       null
//
// Therefore TeachingSupport can access properties from Teacher
// and User through the prototype chain.


// For example:
//
// console.log(TeachingSupport.makeVideo);
// true
//
// console.log(TeachingSupport.name);
// chai
//
// console.log(TeachingSupport.email);
// chai@google.com


// ============================================================
// STRING PROTOTYPE
// ============================================================

let anotherUsername = "ChaiAurCode     ";


// ============================================================
// ADDING A CUSTOM METHOD TO STRING.PROTOTYPE
// ============================================================

// Every string can access methods from String.prototype.
//
// Built-in examples:
//
// toUpperCase()
// toLowerCase()
// trim()
// includes()
// charAt()
//
// Here we are creating our own method called trueLength().

String.prototype.trueLength = function () {

    // "this" refers to the string on which trueLength()
    // was called.
    //
    // Example:
    //
    // anotherUsername.trueLength()
    //
    // In this case:
    //
    // this = "ChaiAurCode     "

    console.log(`${this}`);


    // trim() removes whitespace from the beginning and end
    // of the string.
    //
    // this.trim()
    // removes the spaces after "ChaiAurCode".
    //
    // .length
    // then calculates the length of the trimmed string.

    console.log(`True length is: ${this.trim().length}`);
};


// ============================================================
// USING THE CUSTOM STRING METHOD
// ============================================================


// anotherUsername is a string:
//
// "ChaiAurCode     "
//
// It contains extra spaces at the end.
//
// Calling trueLength():

anotherUsername.trueLength();


// Output:
//
// ChaiAurCode
// True length is: 11
//
// The actual string contains extra spaces,
// but trim() removes them before calculating the length.


// ============================================================
// STRING LITERAL
// ============================================================

"hitesh".trueLength();


// JavaScript temporarily treats the primitive string as an object
// when accessing methods.
//
// Conceptually:
//
// "hitesh"
//    ↓
// String wrapper
//    ↓
// String.prototype
//    ↓
// trueLength()
//
// Therefore our custom trueLength() method works.


"iceTea".trueLength();


// Output:
//
// iceTea
// True length is: 6


// ============================================================
// IMPORTANT CONCEPT
// ============================================================

/*

PROTOTYPE CHAIN:

When JavaScript tries to access a property or method,
it first looks inside the current object.

If it cannot find it, JavaScript looks at the object's prototype.

It continues moving upward through the prototype chain
until it finds the property/method or reaches null.

Example:

myHeros.heyHitesh()

        myHeros
           ↓
    Array.prototype
           ↓
    Object.prototype
           ↓
          null


Another example:

heroPower.hitesh()

        heroPower
           ↓
    Object.prototype
           ↓
          null


String example:

"hitesh".trueLength()

       "hitesh"
           ↓
    String.prototype
           ↓
    Object.prototype
           ↓
          null


============================================================

IMPORTANT DIFFERENCE
============================================================

Object.prototype.hitesh
-----------------------

Because hitesh() is added to Object.prototype,
normal objects and arrays can access it through inheritance.


Array.prototype.heyHitesh
-------------------------

Because heyHitesh() is added only to Array.prototype,
only arrays can access it through their prototype chain.


String.prototype.trueLength
---------------------------

Because trueLength() is added to String.prototype,
strings can access it.


============================================================

PROTOTYPE vs CLASS
============================================================

JavaScript is prototype-based.

Classes in JavaScript are mainly a cleaner syntax
built on top of JavaScript's existing prototype system.

For example:

class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

The sayHello() method is actually stored on:

User.prototype

So when we create:

const user1 = new User("Hitesh");

the prototype chain looks roughly like:

user1
  ↓
User.prototype
  ↓
Object.prototype
  ↓
null


============================================================

"this" KEYWORD
============================================================

In:

String.prototype.trueLength = function () {
    console.log(this);
};

"this" refers to the value that called the method.

Example:

"hello".trueLength();

Here:

this = "hello"


Another example:

anotherUsername.trueLength();

Here:

this = anotherUsername


============================================================

SUMMARY
============================================================

1. Every object can have a prototype.

2. JavaScript searches for properties/methods through
   the prototype chain.

3. Object.prototype is inherited by most objects.

4. Array.prototype contains array-specific methods.

5. String.prototype contains string-specific methods.

6. We can add our own methods to prototypes.

7. __proto__ can be used to establish inheritance,
   although Object.setPrototypeOf() is generally preferred
   when explicitly changing prototypes.

8. "this" inside a method refers to the object/value
   that called the method.

9. JavaScript classes use prototypes behind the scenes.

10. Prototype inheritance is one of the core concepts
    behind JavaScript's object-oriented programming.

*/