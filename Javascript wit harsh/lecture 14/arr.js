//const myArr=[1,2,3,4,5,6,7];

//console.log(myArr);

const myArr2= new Array(1,2,3,4,5,6);

//console.log(myArr2)

const myHeroesMarvel=["Tony","Captian","Thor"];

//console.log(myHeroesMarvel)

// myArr.push(2)
// console.log(myArr);

//myArr.unshift(22);

//console.log(myArr);

// myArr.shift(2);
// console.log(myArr);


// const myNewARR=myArr.join()
// console.log(myNewARR);


// let myArr = [0, 1, 2, 3, 4, 5];

// // slice(startIndex, endIndex)
// // Starts from index 1 and goes up to (but does not include) index 3
// let arrSlice = myArr.slice(1, 3);

// console.log(arrSlice); // Output: [1, 2]

// // Original array remains unchanged because slice() does not modify it
// console.log("A:", myArr); // Output: A: [0, 1, 2, 3, 4, 5]    //



let myArr = [0, 1, 2, 3, 4, 5];

// splice(startIndex, deleteCount)
// Starts from index 1 and removes 3 elements
let arrSlice = myArr.splice(1, 3);

console.log(arrSlice); // Output: [1, 2, 3]

// Original array is modified because splice() changes it
console.log("B:", myArr); // Output: B: [0, 4, 5]

