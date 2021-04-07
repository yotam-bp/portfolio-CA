'use strict'
const WALL = '🟦'
const FOOD = '◽'
const EMPTY = ' ';
const POWERFOOD = '🍍'
var CHERRY = '🍒';
var gEmptyCells = []
var gIntervalCherry;

var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
function init() {
    gBoard = buildBoard()
    console.log(gBoard)
    createPacman(gBoard);
    createGhosts(gBoard);
    gIntervalCherry = setInterval(function () {
        createCherry(gBoard)
    }, 1000);
    printMat(gBoard, '.board-container');
    gGame.isOn = true;
    gGame.score = 0;
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
        }
    }
    board[1][1] = POWERFOOD;
    board[board.length - 2][board.length - 2] = POWERFOOD;
    board[board.length - 2][1] = POWERFOOD;
    board[1][board.length - 2] = POWERFOOD;

    return board;
}

function createCherry(board) {
    if (gEmptyCells.length === 0) return
    else{
        var randIdx = getRandomIntInclusive(0, (gEmptyCells.length - 1))
        var currEmpty = board[gEmptyCells[randIdx].i][gEmptyCells[randIdx].j]
        if (currEmpty !== PACMAN) {
            currEmpty = CHERRY;
            renderCell(gEmptyCells[randIdx], CHERRY)
        }
    }
}

function updateScore(diff) {
    // update model
    gGame.score += diff;
    // and dom
    var elScore = document.querySelector('h2 span');
    elScore.innerText = gGame.score;

}

function gameOver() {
    console.log('Game Over');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
     clearInterval(gIntervalCherry);
    gIntervalGhosts = null
    gEmptyCells = []
    // TODO
    document.querySelector('.board-container').style.display = 'none'
    document.querySelector('.game-over').style.display = 'block'
    document.querySelector('button.restart').style.display = 'block'
}

function playerWon() {
    document.querySelector('.board-container').style.display = 'none'
    var won = document.querySelector('.game-over')
    document.querySelector('button.restart').style.display = 'block'
    won.innerText = `You won!`;
    won.style.display = 'block'
    gEmptyCells = []
}

function restartGame() {
    document.querySelector('.game-over').style.display = 'none';
    document.querySelector('button.restart').style.display = 'none';
    document.querySelector('.board-container').style.display = 'block';
    init();

}

