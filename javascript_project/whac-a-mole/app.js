const squars = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition ;
let currentTime = 60;
let timerId = null;

function randomSquare(){
    squars.forEach(squar => {
        squar.classList.remove("mole");
    })

    let randomSquare = squars[Math.floor(Math.random() * squars.length)]

    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;

}

squars.forEach(squar => {
    squar.addEventListener('mousedown',() => {
        if(squar.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){

    timerId = setInterval(randomSquare,1000);
    
}

randomSquare();
moveMole();

function countDown(){
   currentTime--;
   timeLeft.textContent = currentTime;

   if(currentTime == 0){
    clearInterval(countDownTimerId);
    alert("Game Over! Your final score is "+result);
   }
}


let countDownTimerId = setInterval(countDown,1000);