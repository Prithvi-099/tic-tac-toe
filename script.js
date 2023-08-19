//boolean varialbe to keep track of whoes turn it is
let gameboard = document.querySelector('.gameboard');
let box = document.querySelectorAll('.box');
let winningMessage = document.querySelector('.winningMessage');
let message = document.querySelector('#message');
let restart = document.querySelector('#restart');
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//a separate empty array of the same length of boxes in tic tac toe
let refArr = Array(9).fill(null);

restart.addEventListener('click',endGame);

const o_text="O";
const x_text="X";

let X_class = 'x';
let Circle_class = 'circle';

let circleTurn;
circleTurn = false;
startGame();
hoverEffect();
function startGame(){
    
   for(let i=0;i<box.length;i++){
         box[i].addEventListener("click",handleClick,{once:true}); 
    }
    
}

function endGame(){
    winningMessage.classList.remove("show");
     for(let i=0;i<box.length;i++){
         box[i].removeEventListener("click",handleClick);
         box[i].classList.remove(X_class);
         box[i].classList.remove(Circle_class);
         box[i].innerText = '';
         
    }

    circleTurn = false;
    gameboard.classList.remove(X_class);
    gameboard.classList.remove(Circle_class);

    refArr = Array(9).fill(null);
    startGame();
    hoverEffect();


}


function handleClick(e){
    

let currentClass = circleTurn?Circle_class:X_class;
    
    

    let cell = e.target;
    let id = e.target.id;
    
    placemark(cell,currentClass,e);


    
    if(refArr[id] === null){
       
        refArr[id] = currentClass;
       
    }
    checkWinner();
    swapTurns();
    
    hoverEffect();    
    
    selectingMarkedBoxes();
    
}

function placemark(cell,currentClass,e){
    cell.classList.add(currentClass);
    if(currentClass == X_class){
        e.target.innerText = x_text;
    }
    else if(currentClass == Circle_class){
        e.target.innerText = o_text;
    }
    
}

function swapTurns(){
    circleTurn = !circleTurn;
   
}

function hoverEffect(){
    gameboard.classList.remove(X_class);
    gameboard.classList.remove(Circle_class);
    if(circleTurn){
        gameboard.classList.add(Circle_class);
    }
    else{
        gameboard.classList.add(X_class);
    }

}







function selectingMarkedBoxes(){
    let markedBox_x = document.querySelectorAll('.box.x');
 let markedBox_circle = document.querySelectorAll('.box.circle');


console.log(markedBox_circle);
console.log(markedBox_x);

}


 

 function checkWinner(){
    for(const combo of WINNING_COMBINATIONS){
        const [a,b,c] = combo; 
        
        
        
        if(refArr[a] && refArr[a] === refArr[b] && refArr[a] === refArr[c]){
           

            if(refArr[a] == X_class){
                console.log("player x has won!");
                winningMessage.classList.add("show");
                message.innerHTML = "player x has won!";
            }

            else{
                console.log("player o has won!");
                winningMessage.classList.add("show");
                message.innerHTML = "player o has won!";
            }
        }

        
    }
    
    let flag = true;
    for(let i=0;i<refArr.length;i++){
        if(refArr[i] === null){
            flag = false;
        }
    }

    if(flag){
        console.log("its a draw!");
        winningMessage.classList.add("show");
        message.innerHTML = "It's a Draw!";
    }

    






 }

