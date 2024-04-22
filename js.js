// OLD JS Script
let count = document.getElementById('counts');
let lamp = document.getElementById('lamp');
let timeout = document.getElementById("timeout");
let popUpBlock = document.getElementById("popup");
let container = document.querySelector('.container');
let blWidth = container.clientWidth - 34;
let blHeight = container.clientHeight - 34;

// moves the lamp inside the container
function movingLamp(){
    let newWidth = Math.floor(Math.random() * blWidth) + 1;
    let newHeight = Math.floor(Math.random() * blHeight) + 1;
    
    lamp.style.top = `${newHeight}px`;
    lamp.style.left = `${newWidth}px`;    
}
// adding goals clicking the lamp
lamp.addEventListener('click', countGoals);

function countGoals(){
    count.innerHTML++;
    movingLamp();
}
// starts the timer
function startTimeMinusCount(){
    let startCount = setInterval(() => {
        if(timeout.innerHTML == 0){
            clearInterval(startCount);
            popUpResult();
        }else{
           timeout.innerHTML--;
        }  
    }, 1000);
}
// creating popup after game ends 
function popUpResult(){
    popUpBlock.style.display = "block";
    let popupContent = document.createElement('div');
    let popUpBtnClose = document.createElement('span');
    popupContent.className = "popup-content";
    popUpBtnClose.className = "popup-close";
    popupContent.innerHTML = `Result: ${count.innerHTML} hits`;
    popUpBtnClose.innerHTML = "x";
    popUpBlock.appendChild(popupContent);
    popupContent.appendChild(popUpBtnClose);

    popUpBtnClose.addEventListener("click", closePopUp, false);
    function closePopUp(){
        popUpBlock.style.display = "none";
        window.location.reload();
    }
}
// start the game
function startGame(){
    startTimeMinusCount();
    lamp.style.display = "block";
}; 
