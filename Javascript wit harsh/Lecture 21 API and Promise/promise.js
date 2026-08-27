// const promiseOne = new Promise((res, rej) => {
//   //do an async task

//   setTimeout(() => {
//     console.log("Asunc task is complted");
//     res();
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("Promise Consumed");
// });
// //-----------------------------------------------
// new Promise((res, rej) => {
//   //do an async task

//   setTimeout(() => {
//     console.log("Asunc task is 2 complted");
//     res();
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("Promise 2 Consumed");
// });
//----------------------------------------------------
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({
//       nmae: "harsh",
//       age: "20",
//       stream: "IT",
//     });
//   }, 1000);
// });

// promiseThree.then((data) => {
//   console.log(data.nmae);
// });

//------------------------------------------------------
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const err = true;

//     if (!err) {
//       resolve({ login: "problem resolve" });
//     } else {
//       reject({ login: "problem not  resolve" });
//     }
//   }, 1000);
// });

// promiseFour
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//--------------------------------------

const promiseFive=new Promise((resolve,reject)=>{

  setTimeout(()=>{
    const err=true;

    if(!err){
      resolve("message: done");
    }else{
      reject("message:false");
    }
  },1000)
})