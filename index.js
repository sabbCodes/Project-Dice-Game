let player1Score = 0;
let player2Score = 0;
let Player1Turn = true;
let Player1Start = true;

const header = document.getElementById("game-message");
const firstPlayerScore = document.getElementById("firstPlayerScore");
const secondPlayerScore = document.getElementById("secondPlayerScore");
const firstPlayerScoreboard = document.getElementById("firstPlayerScoreboard");
const secondPlayerScoreboard = document.getElementById("secondPlayerScoreboard");
const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");
const startBtn = document.getElementById("start-btn");
const firstPlayerName = document.getElementById("first-player-name");
const secondPlayerName = document.getElementById("second-player-name");

startBtn.addEventListener("click", hideFirstPage);

function hideFirstPage(){
    document.getElementById("firstPage").classList.add("hide");
    document.getElementById("secondPage").classList.add("display");
    document.getElementById("firstPage").classList.remove("display");

    if (Player1Start){
        Player1Turn = true;
        playerOneTurn();
    } else {
        Player1Turn = false;
        playerTwoTurn();
    }
}

function hideRollBtn(){
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);

function rollDice(){
    const randNum = Math.floor( Math.random() * 6 ) + 1;

    if (Player1Turn){
        player1Score += randNum;
        firstPlayerScore.textContent = player1Score;
        firstPlayerScoreboard.textContent = randNum;
        playerOneTurn();
    } else {
        player2Score += randNum;
        secondPlayerScore.textContent = player2Score;
        secondPlayerScoreboard.textContent = randNum;
        playerTwoTurn();
    }

    if (player1Score > 19){
        header.textContent = `${firstPlayerName.value} has Won`;
        hideRollBtn();
        confetti.start();
    } else if (player2Score > 19){
        header.textContent = `${secondPlayerName.value} has Won`;
        hideRollBtn();
        confetti.start();
    }
    Player1Turn = !Player1Turn;
};

function resetGame(){
    document.getElementById("secondPage").classList.remove("display");
    document.getElementById("firstPage").classList.add("display");
    header.textContent = `${firstPlayerName.value}'s Turn`;
    player1Score = 0;
    player2Score = 0;
    firstPlayerScore.textContent = 0;
    secondPlayerScore.textContent = 0;
    firstPlayerScoreboard.textContent = 0;
    secondPlayerScoreboard.textContent = 0;
    firstPlayerScoreboard.classList.add("active");
    secondPlayerScoreboard.classList.remove("active");
    Player1Turn = true;
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
    confetti.stop();
    Player1Start = !Player1Start;
};

function playerOneTurn(){
    header.textContent = `${firstPlayerName.value}'s Turn`;
    firstPlayerScoreboard.classList.add("active");
    secondPlayerScoreboard.classList.remove("active");
};

function playerTwoTurn(){
    header.textContent = `${secondPlayerName.value}'s Turn`;
    firstPlayerScoreboard.classList.remove("active");
    secondPlayerScoreboard.classList.add("active");
};