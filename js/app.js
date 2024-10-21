

const ball = document.querySelector(".ball");


const ballX=(document.querySelector(".field").offsetWidth/2)-20;
const ballY=(document.querySelector(".field").offsetHeight/2)-25;

ball.addEventListener('mousedown', onBall);
function onBall()
{
    ball.addEventListener("dragstart", processBall)
    ball.addEventListener("drag", processBall)
    ball.addEventListener("dragend", processBall)
}
function outBall(){
    ball.removeEventListener("dragstart", processBall)
    ball.removeEventListener("drag", processBall)
    ball.removeEventListener("dragend", processBall)
}

ball.style.left=ballX+'px';
ball.style.top=ballY+'px';

function processBall(e){
    ball.style.left=e.clientX-25 + 'px';
    ball.style.top=e.clientY-25 + 'px';
    isGoal()
}

function isGoal() {
    let leftGoals=Number(document.getElementById('left-team').innerHTML)
    let rightGoals=Number(document.getElementById('right-team').innerHTML)
    
    if(Number(ball.style.left.replace('px',''))>720 && (Number(ball.style.top.replace('px',''))>=205 &&
    Number(ball.style.top.replace('px',''))<=335)){  
        document.getElementById('left-team').innerHTML=leftGoals+1
        ball.style.left=ballX+'px';
        ball.style.top=ballY+'px';
        outBall()
    }
    if(Number(ball.style.left.replace('px',''))<7 && (Number(ball.style.top.replace('px',''))>=205 &&
    Number(ball.style.top.replace('px',''))<=335)){
        document.getElementById('right-team').innerHTML=rightGoals+1
        ball.style.left=ballX+'px';
        ball.style.top=ballY+'px';
        outBall()
    }
}
