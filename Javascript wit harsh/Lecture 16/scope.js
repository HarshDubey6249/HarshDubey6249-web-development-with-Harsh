// var c = 300          // var is function-scoped (not block-scoped), so it can cause scope issues.

let a = 300            // Global variable

if (true) {
    let a = 10         // Block-scoped variable (different from global 'a')
    const b = 20       // Block-scoped constant

    // console.log("INNER:", a);   // Output: 10
}

// console.log(a);    // Output: 300 (global 'a')
// console.log(b);    // Error: b is not accessible outside the block
// console.log(c);    // Would print 300 if var c was uncommented


// ================= Function Scope =================

function one() {
    const username = "hitesh"   // Accessible only inside function one()

    function two() {
        const website = "youtube"   // Accessible only inside function two()

        // Inner function can access outer function variables
        console.log(username);      // Output: hitesh
    }

    // console.log(website);
    // Error: website is not accessible here because it belongs to function two()

    two();      // Calling inner function
}

// one();


// ================= Block Scope =================

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"

        // Inner block can access outer block variables
        // console.log(username + website);
        // Output: hitesh youtube
    }

    // console.log(website);
    // Error: website is block-scoped
}

// console.log(username);
// Error: username is not accessible outside the if block



// ================= Hoisting =================

// Function declarations are hoisted completely.
// They can be called before they are defined.

console.log(addone(5));      // Output: 6

function addone(num) {
    return num + 1;
}



// Function expressions are NOT fully hoisted.
// Only the variable is hoisted, not its value.

addTwo(5);      // ❌ Error:
// Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

// addTwo(5);   // ✅ Output: 7 (if called after declaration)