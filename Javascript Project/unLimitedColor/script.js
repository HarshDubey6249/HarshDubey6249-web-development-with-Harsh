const colorChange = function () {
  const color = `RGB(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = color;
};
let colorinterval;

document.getElementById("start").addEventListener("click", () => {
   if(!colorinterval){
     colorinterval = setInterval(colorChange, 2000);
  }
 
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(colorinterval);
  colorinterval = null;
  console.log("stop");
});
