const timeLeftDispla = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const bottonSP = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
let currentIndex = 76;
const width = 9;
const logsLeft = document.querySelectorAll(".log-left");

function moveFrog(e){
    squares[currentIndex].classList.remove("frog");

    switch(e.key){
        case "ArrowLeft":
            if(currentIndex % width !== 0){
            currentIndex -= 1;
            }
            break;  
        case "ArrowRight":
            if(currentIndex % width < width -1){
            currentIndex += 1;
            }
            break;
        case "ArrowUp":
            if(currentIndex - width >= 0){
            currentIndex -= width;
            }
            break;
        case "ArrowDown":
            if(currentIndex + width < width * width){
            currentIndex += width;
            }
            break;
    }
    squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog);

function autoMoveLogs(){
    logsLeft.forEach(logleft => moveLogLeft(logleft))
}


function moveLogLeft(logleft){
    switch(true){
        case logleft.classList.contains['l1']:
            
    }
}



