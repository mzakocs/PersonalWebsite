let oldtime = 0;
const mainBox = document.getElementById('main_box')
const startButton = document.getElementById('start_button');
const square = document.getElementById('square');
const WIDTH = mainBox.offsetWidth;
const HEIGHT = mainBox.offsetHeight;


function onClickStartButton() {
    square.style.display = 'block';
    startButton.style.display = 'none';
    oldtime = (new Date()).getTime() / 1000;
}

function moveSquare() {
    let x = Math.floor(Math.random() * (WIDTH - 50));
    let y = Math.floor(Math.random() * (HEIGHT - 50));
    square.style.left = x + "px";
    square.style.top = y + "px";
}

function stopGame() {
    const time = (new Date()).getTime() / 1000;
    square.style.display = 'none';
    startButton.textContent = 'Game over. Your time was: ' + (time - oldtime).toFixed(2).toString() + " seconds. " + "Click to play again";
    startButton.style.display = 'block';
}

function setupGame() {
    let count = 0;
    startButton.addEventListener('click', onClickStartButton);

    square.addEventListener('click', function () {
        moveSquare();

        count++;
        if (count === 5) {
            
            stopGame();
            count = 0;
        }
    })
}

setupGame();