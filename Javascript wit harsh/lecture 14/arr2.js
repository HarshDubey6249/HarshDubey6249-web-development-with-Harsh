// -------------------- Array Example --------------------

const marvel_Heroes = ["Thor", "IronMan", "Spiderman"];
const DC_Heroes = ["Superman", "Flash", "Batman"];

// Print both arrays
// console.log(marvel_Heroes);
// console.log(DC_Heroes);


// -------------------- push() --------------------
// push() adds the entire DC_Heroes array as a SINGLE element
// It modifies the original array.

// marvel_Heroes.push(DC_Heroes);
// console.log(marvel_Heroes);

// Output:
// [
//   "Thor",
//   "IronMan",
//   "Spiderman",
//   ["Superman", "Flash", "Batman"]
// ]


// -------------------- concat() --------------------
// concat() merges two arrays and returns a NEW array.
// It does NOT modify the original arrays.

// let allHeroes = marvel_Heroes.concat(DC_Heroes);
// console.log(allHeroes);

// Output:
// [
//   "Thor",
//   "IronMan",
//   "Spiderman",
//   "Superman",
//   "Flash",
//   "Batman"
// ]


// -------------------- Spread Operator (...) --------------------
// Spread operator also merges arrays.
// More modern and commonly used than concat().

// let allHeroes = [...marvel_Heroes, ...DC_Heroes];
// console.log(allHeroes);


// -------------------- flat() --------------------
// flat() removes nested arrays and creates a single-level array.

// const another_array = [
//     123,
//     [3, 4, 5],
//     46,
//     [2, [3, [5, [6]]]],
//     67,
//     43
// ];

// Infinity means flatten ALL levels.
// const realanother_array = another_array.flat(Infinity);

// console.log(realanother_array);

// Output:
// [123, 3, 4, 5, 46, 2, 3, 5, 6, 67, 43]


// -------------------- Array.isArray() --------------------
// Checks whether a value is an array.

// console.log(Array.isArray("Hitesh")); // false


// -------------------- Array.from() --------------------
// Converts iterable or array-like objects into an array.

// console.log(Array.from("Hitesh"));
// Output:
// ['H', 'i', 't', 'e', 's', 'h']


// Interesting Case:
// Objects are not iterable, so Array.from() returns an empty array.

// console.log(Array.from({ name: "hitesh" }));
// Output:
// []
// We need to specify whether we want keys or values.


// -------------------- Array.of() --------------------
// Creates a new array from given values.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// Output:
// [100, 200, 300]