// ===============================
// for...of loop
// ===============================

// Array
// for...of is used to get each VALUE from an iterable.
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


// String
// A string is also iterable, so for...of gives
// each character one by one.
const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// ===============================
// Maps
// ===============================

// Map stores data in KEY-VALUE pairs.
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// If the same key is added again,
// the value is updated/replaced.
// Here, IN already exists.
map.set('IN', "India")

// console.log(map);


// Map can be directly used with for...of.
// Each iteration gives an array: [key, value].
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// ===============================
// Object
// ===============================

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// ❌ Object is NOT directly iterable using for...of.
// This will give:
// TypeError: myObject is not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// ✅ To iterate over an object, use Object.entries()

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}



// ===============================
// for...in loop
// ===============================

// Object
// for...in is commonly used to iterate over OBJECT KEYS.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ===============================
// for...in with Array
// ===============================

// for...in gives the INDEX of an array,
// not the actual value.

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


// ===============================
// for...in with Map
// ===============================

// Map is iterable using for...of,
// but for...in does NOT work for getting
// Map's keys and values.

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
}


// ===============================
// Quick Difference
// ===============================

// for...in  → mainly used for KEYS / INDEXES
// for...of  → mainly used for VALUES

// Example:

for (const key in myObject) {
    console.log(key);          // js, cpp, rb, swift
}

for (const value of programming) {
    console.log(value);        // js, rb, py, java, cpp
}