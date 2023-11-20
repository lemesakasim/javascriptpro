const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const userStart = [230,10];
let currentPosition = userStart;
const boardWidth = 560;
const boardHeight = 300;
const ballStart = [270,50];
let ballCurrentPosition = ballStart;
let timeId = null;
const ballDimater = 20;
let xDirection = -2;
let yDirection = 2;
const scoreDisplay = document.querySelector("#score");
let score = 0; 

class Block {
    constructor(xAxis,yAxis){
         this.bottomLeft = [xAxis,yAxis];
         this.bottomRight = [xAxis + blockWidth, yAxis];
         this.topLeft = [xAxis,yAxis + blockHeight];
         this.topRigh = [xAxis + blockWidth, yAxis + blockHeight];

    }
}


const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
     
]

function addBlocks(){
    for(let i = 0; i < blocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks();


const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);


function drawUser(){
    user.style.left = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
}

function drawBall(){
    ball.style.left = ballCurrentPosition[0] +"px";
    ball.style.bottom = ballCurrentPosition[1]+"px";
}


function moveUser(e){
    switch(e.key){
        case "ArrowLeft":
            if(currentPosition[0] > 0){
                currentPosition[0] -= 10;
                drawUser();
            }
            break;
        case "ArrowRight":
            if(currentPosition[0] < boardWidth - blockWidth)
            currentPosition[0] += 10;
            drawUser();
    
            break;

    }
}


document.addEventListener("keydown", moveUser);

const ball = document.querySelector(".ball");
ball.classList.remove("ball");
ball.classList.add("ball"); 
drawBall();
grid.appendChild(ball);

function moveBall(){
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
}

timeId = setInterval(moveBall,30);

function checkForCollisions(){
    for(let i=0; i < blocks.length; i++){
        if(
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
                ((ballCurrentPosition[1] + ballDimater) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]))){

                    const allBlocks = Array.from(document.querySelectorAll(".block"));
                    allBlocks[i].classList.remove("block");
                    blocks.splice(i,1);
                    changeDirection();
                    score++;
                    scoreDisplay.textContent = String(score);


                    if(blocks.length === 0){
                        scoreDisplay.textContent = "YOU Win!";
                        clearInterval(timeId);
                        document.removeEventListener("keydown", moveUser);
                    }
                }
        
    }



    if(ballCurrentPosition[0] > boardWidth - ballDimater ||
         ballCurrentPosition[1] >= (boardHeight - ballDimater) ||
         ballCurrentPosition[0] <= 0){
       changeDirection();
    }



    if(
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
    ){
        changeDirection();
    }


    if(ballCurrentPosition[1] <=0){
        clearInterval(timeId);
        scoreDisplay.textContent = "Game Over!";
        document.removeEventListener("keydown",moveUser);
    }
}


function changeDirection(){
      if(xDirection === 2 && yDirection == 2){
        yDirection = -2;
        return;
      }
      if(xDirection == 2 && yDirection == -2){
        xDirection = -2;
        return;
      }
      if(xDirection == -2 && yDirection == -2){
        yDirection = 2;
        return;
      }
      if(xDirection == -2 && yDirection ==2){
        xDirection = 2;
        return;
      }

}


