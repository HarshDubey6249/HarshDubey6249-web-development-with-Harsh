// ============================================================
// 1. PROMISE ONE
// ============================================================

// Creating a new Promise
const promiseOne = new Promise((resolve, reject) => {
  // This represents an asynchronous task.
  // setTimeout() will execute the function after 2 seconds.

  setTimeout(() => {
    console.log("Async task is completed");

    // resolve() means the Promise was completed successfully.
    resolve();
  }, 2000);
});


// Consuming the Promise
// .then() runs when the Promise is successfully resolved.
promiseOne.then(() => {
  console.log("Promise Consumed");
});


// Output after 2 seconds:
//
// Async task is completed
// Promise Consumed



// ============================================================
// 2. PROMISE TWO
// ============================================================

// Creating another Promise
// We store it inside promiseTwo so that we can consume it later.

const promiseTwo = new Promise((resolve, reject) => {

  // Simulating an asynchronous task
  setTimeout(() => {
    console.log("Async task 2 completed");

    // Promise successfully completed
    resolve();
  }, 2000);
});


// Consuming promiseTwo
promiseTwo.then(() => {
  console.log("Promise 2 Consumed");
});


// Output after 2 seconds:
//
// Async task 2 completed
// Promise 2 Consumed



// ============================================================
// 3. PROMISE THREE - PASSING DATA WITH resolve()
// ============================================================

const promiseThree = new Promise((resolve, reject) => {

  // Simulating an asynchronous operation
  setTimeout(() => {

    // resolve() can send data to .then()
    resolve({
      name: "Harsh",
      age: 20,
      stream: "IT"
    });

  }, 1000);
});


// The value passed inside resolve()
// becomes available inside .then()

promiseThree.then((data) => {

  console.log(data);

  // Accessing individual properties
  console.log(data.name);
  console.log(data.age);
  console.log(data.stream);
});


// Output:
//
// {
//   name: "Harsh",
//   age: 20,
//   stream: "IT"
// }
//
// Harsh
// 20
// IT



// ============================================================
// 4. PROMISE FOUR - resolve() AND reject()
// ============================================================

const promiseFour = new Promise((resolve, reject) => {

  // Simulating an asynchronous task
  setTimeout(() => {

    // Suppose this variable represents an error.
    const err = true;


    // If there is NO error
    if (!err) {

      // resolve() means SUCCESS
      resolve({
        login: "Problem resolved"
      });

    }

    // If there IS an error
    else {

      // reject() means FAILURE
      reject({
        login: "Problem not resolved"
      });

    }

  }, 1000);
});


// Handling the Promise

promiseFour

  // .then() runs when resolve() is called
  .then((data) => {
    console.log(data);
  })

  // .catch() runs when reject() is called
  .catch((error) => {
    console.log(error);
  });


// Because err = true:
//
// reject() will execute
//
// Therefore .catch() will execute.
//
// Output:
//
// { login: "Problem not resolved" }



// ============================================================
// 5. PROMISE FIVE - STRING DATA
// ============================================================

const promiseFive = new Promise((resolve, reject) => {

  // Simulating an asynchronous task
  setTimeout(() => {

    const err = true;


    // If there is no error
    if (!err) {

      // resolve() sends successful data
      resolve("message: done");

    }

    // If there is an error
    else {

      // reject() sends error data
      reject("message: error detected");

    }

  }, 1000);
});


// Consuming the Promise

promiseFive

  // Runs when resolve() is called
  .then((data) => {
    console.log(data);
  })

  // Runs when reject() is called
  .catch((error) => {
    console.log(error);
  });


// Because err = true:
//
// Output:
//
// message: error detected



// ============================================================
// 6. PROMISE FIVE USING async/await
// ============================================================

// async means this function can use await.

async function consumePromiseFive() {

  // try block contains code that might produce an error.
  try {

    // await waits for the Promise to complete.

    // If promiseFive resolves:
    // data will contain the resolved value.

    const data = await promiseFive;

    console.log(data);

  }

  // If promiseFive rejects,
  // execution comes here.

  catch (error) {

    console.log(error);

  }
}


// Calling the async function
consumePromiseFive();


// Since err = true:
//
// promiseFive rejects.
//
// Therefore catch() executes.
//
// Output:
//
// message: error detected



// ============================================================
// 7. FETCH API USING async/await
// ============================================================

async function textApiFetch() {

  // try is used because fetch() can produce an error.
  try {

    // fetch() sends an HTTP request.

    // fetch() returns a Promise.

    // await waits for the Promise to complete.

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );


    // response.json() also returns a Promise.

    // await waits for JSON conversion to finish.

    const data = await response.json();


    // Now data contains the JavaScript representation
    // of the JSON response.

    console.log(data);

  }

  // If an error occurs,
  // catch() receives the error.

  catch (error) {

    console.log(error);

  }
}


// Calling the function
textApiFetch();


// Flow:
//
// textApiFetch()
//       ↓
// fetch()
//       ↓
// Promise
//       ↓
// Response
//       ↓
// response.json()
//       ↓
// JSON data
//       ↓
// console.log(data)



// ============================================================
// 8. FETCH API USING .then() AND .catch()
// ============================================================

// fetch() returns a Promise.

fetch("https://api.github.com/users/hiteshchoudhary")

  // ----------------------------------------------------------
  // FIRST .then()
  // ----------------------------------------------------------

  .then((response) => {

    // response contains the HTTP response.

    // response.ok is true when the HTTP response
    // is in the successful range.

    if (!response.ok) {

      // throw creates an error that will be caught
      // by .catch()

      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }


    // response.json() converts the response body
    // from JSON into JavaScript data.

    // IMPORTANT:
    // response.json() itself returns a Promise.

    return response.json();

  })


  // ----------------------------------------------------------
  // SECOND .then()
  // ----------------------------------------------------------

  .then((data) => {

    // The data returned from response.json()
    // comes here.

    console.log(data);

  })


  // ----------------------------------------------------------
  // .catch()
  // ----------------------------------------------------------

  .catch((error) => {

    // Any error from the Promise chain
    // can be handled here.

    console.log(error);

  });