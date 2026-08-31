//Object.getOwnPropertyDescriptor() is used to get the
// property descriptor of a property inside an object.

// Example:
// const math = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(math);

// It shows information like:
// writable     -> Can the value be changed?
// enumerable   -> Will the property appear in loops?
// configurable -> Can the property descriptor be changed?


// Creating an object called GNmae
const GNmae = {
  // "name" is a property with value "trisha"
  name: "trisha",

  // "age" is a property with value "21"
  age: "21",

  // "rl" is a method (function) inside the object
  rl: function rel() {
    console.log("friends");
  }
};


// ---------------------------------------------------------
// Getting the property descriptor of "name"
// ---------------------------------------------------------

// Object.getOwnPropertyDescriptor() returns the
// descriptor information of the "name" property.

// const trisha = Object.getOwnPropertyDescriptor(GNmae, "name");
// console.log(trisha);


// Output will be similar to:
//
// {
//   value: 'trisha',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// ---------------------------------------------------------
// Changing property settings using defineProperty()
// ---------------------------------------------------------

// Object.defineProperty() allows us to change
// the property descriptor of an object property.

// Here we are modifying the "name" property.

// Object.defineProperty(GNmae, "name", {

  // writable: false means the value of "name"
  // cannot be changed.
//   writable: false,

  // enumerable: false means "name" will NOT
  // appear when using Object.entries(), Object.keys(),
  // or for...in loops.
//   enumerable: false,

  // configurable: false means the property
  // descriptor cannot be changed again.
//   configurable: false
// });


// Get the descriptor again after changing it.

// const trisha1 = Object.getOwnPropertyDescriptor(GNmae, "name");
// console.log(trisha1);


// Display the complete object.

// console.log(GNmae);


// ---------------------------------------------------------
// Object.entries()
// ---------------------------------------------------------

// Object.entries(GNmae) converts the object's
// enumerable properties into an array of key-value pairs.
//
// Example:
//
// Object.entries(GNmae)
//
// [
//   ["name", "trisha"],
//   ["age", "21"],
//   ["rl", function]
// ]


// for...of loop is used to go through each key-value pair.
//
// [key, value] uses destructuring:
//
// key   -> property name
// value -> property value

for (const [key, value] of Object.entries(GNmae)) {

    // typeof value checks the data type of the value.
    //
    // If the value is NOT a function, then print it.
    //
    // This prevents the "rl" function from being printed.

    if (typeof value !== "function") {

        // Template literals are used to combine
        // the key and value into a string.
        //
        // Example:
        // name:trisha
        // age:21

        console.log(`${key}:${value}`);
    }
}
// what happens when you run it?

// Because your name and age properties are enumerable, the loop prints:

// name:trisha
// age:21

// The rl function is not printed because of:

// if (typeof value !== "function")

// If you removed that condition, the loop would also process the rl function.

// Important concept

// The three main property descriptor options are:

// Property	Meaning
// writable	Can the property's value be changed?
// enumerable	Will the property appear in loops like Object.entries()?
// configurable	Can the property's descriptor be changed/deleted?

// For example:

// Object.defineProperty(GNmae, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false
// });

// After this, name won't appear in:

// Object.entries(GNmae)

// So your example is mainly demonstrating Object Property Descriptors + Object.entries() + filtering functions.W