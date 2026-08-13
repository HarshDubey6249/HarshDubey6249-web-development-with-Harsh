// ============================================================
// METHOD 1: Create a separate BMI function
// ============================================================
// Purpose:
// - Put BMI calculation and result logic inside a reusable function.
// - Useful when you want to call the same BMI logic from multiple places.
// - The function receives height and weight as parameters.
//
// Problem in your old version:
// - BMI formula was incorrect.
// - Normal condition was impossible:
//   bmiCal < 18.6 && bmiCal > 24.9
// - bmical and bmiCal had different capitalization.
//
// Example:
//
// function bmi(height, weight) {
//     const bmiCal = weight.value / ((height.value / 100) ** 2);
//
//     if (bmiCal < 18.6) {
//         result.innerHTML = `<p>Under Weight BMI is ${bmiCal}</p>`;
//     } 
//     else if (bmiCal <= 24.9) {
//         result.innerHTML = `<p>Normal Range BMI is ${bmiCal}</p>`;
//     } 
//     else {
//         result.innerHTML = `<p>Overweight BMI is ${bmiCal}</p>`;
//     }
// }


// ============================================================
// METHOD 2: Using click event on the button
// ============================================================
// Purpose:
// - Run the BMI calculation when the button is clicked.
// - Uses addEventListener("click", ...).
//
// Advantage:
// - Simple and easy to understand.
// - Good when you only want to respond to a button click.
//
// Disadvantage:
// - If the button is inside a <form>, the form can submit/reload
//   the page unless you handle preventDefault().
//
// Example:
//
// button.addEventListener("click", () => {
//
//     const bmiCal = (
//         weight.value / ((height.value / 100) ** 2)
//     ).toFixed(2);
//
//     if (bmiCal < 18.6) {
//         result.innerHTML = `<p>Under Weight BMI is ${bmiCal}</p>`;
//     } 
//     else if (bmiCal <= 24.9) {
//         result.innerHTML = `<p>Normal Range BMI is ${bmiCal}</p>`;
//     } 
//     else {
//         result.innerHTML = `<p>Overweight BMI is ${bmiCal}</p>`;
//     }
// });


// ============================================================
// METHOD 3: Using the form submit event ⭐
// ============================================================
// Purpose:
// - Handle the complete form submission.
// - Better approach when your inputs are inside a <form>.
// - Works when the user clicks Calculate.
// - Also works when the user presses Enter inside the form.
//
// preventDefault():
// - Stops the browser's default form submission.
// - Prevents the page from refreshing/reloading.
//
// Input validation:
// - Checks whether height and weight are valid.
// - Stops calculation if the input is empty, negative, or not a number.
//
// BMI formula:
// - Height is entered in centimeters.
// - Convert cm to meters using / 100.
// - BMI = weight / height².
//
// This is the recommended method for your BMI calculator.

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let result = document.querySelector("#results");

let form = document.querySelector("#bmiForm");

form.addEventListener("submit", (e) => {

    // Stop the form from refreshing the page
    e.preventDefault();


    // -------------------------
    // Height validation
    // -------------------------
    if (
        height.value === "" ||
        height.value <= 0 ||
        isNaN(height.value)
    ) {
        result.innerHTML = `Please give a valid height`;
        return;
    }


    // -------------------------
    // Weight validation
    // -------------------------
    if (
        weight.value === "" ||
        weight.value <= 0 ||
        isNaN(weight.value)
    ) {
        result.innerHTML = `Please give a valid weight`;
        return;
    }


    // -------------------------
    // BMI calculation
    // -------------------------
    // Height is entered in CM,
    // so convert CM to meters first.
    const bmiCal = (
        weight.value / ((height.value / 100) ** 2)
    ).toFixed(2);


    // -------------------------
    // BMI category
    // -------------------------

    if (bmiCal < 18.6) {

        result.innerHTML =
            `<p>Under Weight BMI is ${bmiCal}</p>`;

    } 
    else if (bmiCal <= 24.9) {

        result.innerHTML =
            `<p>Normal Range BMI is ${bmiCal}</p>`;

    } 
    else {

        result.innerHTML =
            `<p>Overweight BMI is ${bmiCal}</p>`;
    }
});