// ========================================
// map() Method
// ========================================

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map() creates a NEW array by applying
// a function to every element.

// const newNums = myNumers.map((num) => {
//     return num + 10
// })


// ========================================
// Method Chaining
// ========================================

// First map()  → multiply every number by 10
// Second map() → add 1 to every number
// filter()    → keep only numbers >= 40

const newNums = myNumers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNums)

// Result:
// [41, 51, 61, 71, 81, 91, 101]


// ========================================
// reduce() Method
// ========================================

const myNums = [1, 2, 3]


// reduce() is used to reduce an array
// into a SINGLE value.

// acc  → accumulator
// curr → current value

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


// Using arrow function

const myTotal = myNums.reduce(
    (acc, curr) => acc + curr,
    0
)

console.log(myTotal)

// Result:
// 6


// ========================================
// reduce() with Objects
// ========================================

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]


// Add the price of every item.
//
// acc       → total price so far
// item      → current object
// item.price → price of current item

const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.price,
    0
)

console.log(priceToPay)

// Result:
// 22996