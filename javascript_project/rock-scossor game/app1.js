const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener("click", (e) => {
        userChoice =  e.target.id;
        userChoiceDisplay.textContent = userChoice;
        generateComputerChoice();
        getResult();
    })
})


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if(randomNumber === 1){
        computerChoice = "rock";
    }
    else if(randomNumber === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissor";
    }

    computerChoiceDisplay.textContent = computerChoice;

}

function getResult(){
     if(computerChoice === userChoice){
        result = "It's draw!";
     }
     else if(computerChoice === "rock" && userChoice === "paper"){
        result = "You win!";
     }
     else if(computerChoice === "rock" && userChoice === "scissor"){
        result = "You lose!";
     }
     else if(computerChoice === "paper" && userChoice === "rock"){
        result = "You lose!";
     }
     else if(computerChoice === "paper" && userChoice === "scissor"){
        result = "You lose";
     }
     else if(computerChoice === "scissor" && userChoice === "rock"){
        result = "You win!";
     }
     else{
        result = "You win!";
     }
     resultDisplay.textContent = result;
}