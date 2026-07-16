// let number=400;
// console.log(number);


// let explicitNumber= new Number(400);
// console.log(explicitNumber);

// let otherNUmber=12345.9090;

// console.log(otherNUmber.toFixed(2));
// console.log(otherNUmber.toPrecision(5));
// console.log(otherNUmber.toLocaleString("eg-in"));

//math


// let number=100.20;

// console.log(Math.ceil(number))

// console.log(Math.floor(number))

// console.log(Math.abs(number))

// console.log(Math.max(22,23,34,45,6,7))

// console.log(Math.min(23,43,12,21,22))

// let arr = [1, 2, 3, 4];



// for (let i = 0; i < 10; i++) {

// let r=Math.floor(Math.random()*4)

//     console.log(` ${i+1} ==> The random value is ${r} and random  arr output ${arr[r]}`);
// }



function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(2,5))



