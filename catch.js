var startGameBtn = document.getElementById('start-game');
var lamp = document.getElementById('lamp');
var count = document.getElementById('counts');
var container = document.querySelector('.container');
var timeout = document.getElementById("timeout");
var popUpBlock = document.getElementById("popup");
// adding goals clicking the lamp
lamp.addEventListener('click', countGoals);
// adding goals clicking the lamp
startGameBtn.addEventListener('click', startGame);
// moves the lamp inside the container
function movingLamp() {
    var blWidth = container.clientWidth - 34;
    var blHeight = container.clientHeight - 34;
    var newWidth = Math.floor(Math.random() * blWidth) + 1;
    var newHeight = Math.floor(Math.random() * blHeight) + 1;
    lamp.style.top = "".concat(newHeight, "px");
    lamp.style.left = "".concat(newWidth, "px");
}
function countGoals(e) {
    e.preventDefault();
    count.innerHTML = "".concat(Number(count.innerHTML) + 1);
    movingLamp();
}
// starts the timer
function startTimeMinusCount() {
    var startCount = setInterval(function () {
        if (Number(timeout.innerHTML) === 0) {
            clearInterval(startCount);
            popUpResult();
        }
        else {
            timeout.innerHTML = "".concat(Number(timeout.innerHTML) - 1);
        }
    }, 1000);
}
// start the game
function startGame(e) {
    e.preventDefault();
    startTimeMinusCount();
    lamp.style.display = "block";
}
;
// creating popup after game ends 
function popUpResult() {
    var popupContent = document.createElement('div');
    var popUpBtnClose = document.createElement('span');
    popUpBlock.style.display = "block";
    popupContent.className = "popup-content";
    popUpBtnClose.className = "popup-close";
    popupContent.innerHTML = "Result: ".concat(count.innerHTML, " hits");
    popUpBtnClose.innerHTML = "x";
    popUpBlock.appendChild(popupContent);
    popupContent.appendChild(popUpBtnClose);
    popUpBtnClose.addEventListener("click", closePopUp);
}
function closePopUp(e) {
    e.preventDefault();
    popUpBlock.style.display = "none";
    window.location.reload();
}
