let start = document.querySelector("#start");
let game = document.querySelector("#game");
start.addEventListener("click", startGame);
game.addEventListener("click", handleBoxClick)
let timeHeader = document.querySelector("#time-header")
let resultHeader = document.querySelector("#result-header")
let result = document.querySelector("#result")
let gameTime = document.querySelector("#game-time")
gameTime.addEventListener("input", setGameTime)
let score = 0
let time = document.querySelector("#time")
let isGameStarted = false
let createcolor

function startGame() {
    score = 0
    setGameTime();
    timeHeader.classList.remove('hide')
    resultHeader.classList.add('hide')
    isGameStarted = true
    console.log("Start");
    start.classList.add("hide")
    game.style.background = "#FFF"
    gameTime.setAttribute('disabled', 'true')

    let interval = setInterval(function () {
        let t = time.textContent
        if (t <= 0) {
            clearInterval(interval);
            endGame();

        }
        else {
            time.textContent = (t - 0.1).toFixed(1);
        }

    }, 100)

    renderBox();
}
function setGameTime(){
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove('hide')
    resultHeader.classList.add('hide')
}
function endGame() {
    isGameStarted = false
    start.classList.remove('hide');
    game.style.background = "#9be8fb"
    game.innerHTML = "";
    timeHeader.classList.add('hide')
    resultHeader.classList.remove('hide')
    result.textContent = score;
    gameTime.removeAttribute('disabled')
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function renderBox() {
    game.innerHTML = "";
    let boxSize = getRandom(30, 100)
    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize
    let box = document.createElement('div');
    box.style.width = box.style.height = boxSize + "px";
    box.style.background = "#000"
    box.style.position = "absolute"
    box.style.top = getRandom(0, maxTop) + "px"
    box.style.left = getRandom(0, maxLeft) + "px"
    box.style.cursor = "pointer"
    box.setAttribute("data-box", "true")
    game.insertAdjacentElement("afterbegin", box)
    let red = getRandom(0, 255);
    let green = getRandom(0, 255);
    let blue = getRandom(0, 255);
   box.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function handleBoxClick(event) {
    if(!isGameStarted){
        return
    }


    if (event.target.dataset.box) {
        score++;
        renderBox()
    }
    
}
