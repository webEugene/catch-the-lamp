const startGameBtn = document.getElementById('start-game')! as HTMLButtonElement;
const lamp = document.getElementById('lamp')! as HTMLDivElement;
const count = document.getElementById('counts')! as HTMLSpanElement;
const container = document.querySelector('.container')! as HTMLDivElement;
const timeout = document.getElementById("timeout")! as HTMLSpanElement;
const popUpBlock = document.getElementById("popup")! as HTMLDivElement;

// adding goals clicking the lamp
lamp.addEventListener('click', countGoals);
// adding goals clicking the lamp
startGameBtn.addEventListener('click', startGame);

// moves the lamp inside the container
function movingLamp() {
    const blWidth: number = container.clientWidth - 34;
    const blHeight: number = container.clientHeight - 34;

    const newWidth: number = Math.floor(Math.random() * blWidth) + 1;
    const newHeight: number = Math.floor(Math.random() * blHeight) + 1;
    
    lamp.style.top = `${newHeight}px`;
    lamp.style.left = `${newWidth}px`;    
}


function countGoals(e: Event){
    e.preventDefault();
    count.innerHTML = `${Number(count.innerHTML) + 1}`;
    movingLamp();
}

// starts the timer
function startTimeMinusCount(){
    let startCount = setInterval(() => {        
        if(Number(timeout.innerHTML) === 0){
            clearInterval(startCount);
            popUpResult();
        }else{
            timeout.innerHTML = `${Number(timeout.innerHTML) - 1}`;
        }  
    }, 1000);
}

// start the game
function startGame(e: Event) {
    e.preventDefault();
    startTimeMinusCount();
    lamp.style.display = "block";
};

// creating popup after game ends 
function popUpResult() {
    const popupContent = document.createElement('div');
    const popUpBtnClose = document.createElement('span');

    popUpBlock.style.display = "block";
    popupContent.className = "popup-content";
    popUpBtnClose.className = "popup-close";
    popupContent.innerHTML = `Result: ${count.innerHTML} hits`;
    popUpBtnClose.innerHTML = "x";
    popUpBlock.appendChild(popupContent);
    popupContent.appendChild(popUpBtnClose);

    popUpBtnClose.addEventListener("click", closePopUp);
}

function closePopUp(e: Event){
    e.preventDefault();
    popUpBlock.style.display = "none";
    window.location.reload();
}