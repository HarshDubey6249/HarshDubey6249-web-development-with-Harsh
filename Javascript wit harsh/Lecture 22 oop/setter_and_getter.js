// Creating a class named Girl
class Girl {

    // Constructor runs automatically when we create
    // a new object using the "new" keyword.
    constructor(name, age, rel) {

        // Store the name in the object.
        this.name = name;

        // Store the age in the object.
        this.age = age;

        // Here we are assigning rel.
        //
        // Because we have a setter named "rel",
        // JavaScript automatically calls:
        //
        // set rel(rel)
        //
        // instead of directly creating this.rel.

        this.rel = rel;
    }


    // --------------------------------------------------
    // GETTER
    // --------------------------------------------------

    // The getter runs automatically when we access:
    //
    // girl.rel

    get rel() {

        // Return the internal _rel value
        // with additional text.

        return `${this._rel} is beyond the world`;
    }


    // --------------------------------------------------
    // SETTER
    // --------------------------------------------------

    // The setter runs automatically when we assign:
    //
    // this.rel = rel
    //
    // or:
    //
    // girl.rel = "something"

    set rel(rel) {

        // Store the value in _rel.
        //
        // We use _rel so that the setter doesn't
        // call itself again.

        this._rel = rel;
    }
}


// --------------------------------------------------
// Creating an object from the Girl class
// --------------------------------------------------

const girl = new Girl("Trisha", 21, "osl");


// --------------------------------------------------
// Accessing the rel property
// --------------------------------------------------

// "rel" has a getter, so the getter automatically runs.

console.log(girl.rel);


// Output
// osl is beyond the world
// The important flow

// When this executes:

// const girl = new Girl("Trisha", 21, "osl");

// the constructor runs:

// this.rel = rel;

// At this point:

// rel = "osl"

// Because rel has a setter:

// set rel(rel) {
//     this._rel = rel;
// }

// the value is stored as:

// girl._rel = "osl";

// Then when you do:

// console.log(girl.rel);

// JavaScript calls the getter:

// get rel() {
//     return `${this._rel} is beyond the world`;
// }

// So:

// girl.rel
//    ↓
// getter
//    ↓
// this._rel
//    ↓
// "osl"
//    ↓
// "osl is beyond the world"
// Why don't we use this.rel inside the getter?

// You might think of writing:

// get rel() {
//     return `${this.rel} is beyond the world`;
// }

// ❌ Don't do this.

// It would call the getter again:

// this.rel
//  ↓
// getter
//  ↓
// this.rel
//  ↓
// getter
//  ↓
// this.rel
//  ↓
// ...

// This creates infinite recursion.

// That's why we use:

// this._rel

// as the actual stored value.

// Simple rule to remember
// get rel() {
//     // READ
// }

// set rel(value) {
//     // WRITE
// }

// And usually:

// this._rel

// is used to store the actual value.

// So the pattern is:

// rel        → public property
//    ↓
// getter/setter
//    ↓
// _rel       → internal stored value