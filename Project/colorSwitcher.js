// let grey=document.getElementById("grey");
// let orange=document.getElementById("orange");
// let blue=document.getElementById("blue");
// let yellow=document.getElementById("yellow");

// let canvas=document.querySelector(".canvas")

// grey.addEventListener("click",grey1);

// function grey1(){
//     canvas.style.backgroundColor="grey";
// }

//-----------------------------------------------

const btn = document.querySelectorAll(".button");

const body = document.querySelector("body");

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id);

        switch(e.target.id){
            case "grey":
                        body.style.backgroundColor=e.target.id;
                        break;
            case "orange":
                        body.style.backgroundColor=e.target.id;
                        break;
            case "blue":
                        body.style.backgroundColor=e.target.id;
                        break;
            case "yellow":
                        body.style.backgroundColor=e.target.id;
                        break;
            default:
                    break;
        }
    });
});