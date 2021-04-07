'use strict'
var PACMAN = '😑';
var gTotalFood = 60
var gPacman;

function createPacman(board) {
    gPacman = {
        location: {
            i: 6,
            j: 6
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(ev) {
    if (!gGame.isOn) return
    // use getNextLocation(), nextCell
    var nextLocation = getNextLocation(ev);

    var nextCell = gBoard[nextLocation.i][nextLocation.j];
    if (nextCell === POWERFOOD && gPacman.isSuper)return

    if (nextCell === POWERFOOD ) {
        gPacman.isSuper = true;
        gEmptyCells.push({i:nextLocation.i , j: nextLocation.j})
         if(gPacman.isSuper){
            setTimeout(function () {
                gPacman.isSuper = false;
                while(gGhosts.length < 3){
                    createGhost(gBoard)
                }
            }, 5000)
        //     console.log(gPacman.isSuper, 'isSuper')
         }
    }
    // return if cannot move
    if (nextCell === WALL) return;
    // hitting a ghost?  call gameOver
    if (nextCell === GHOST) {
        if (gPacman.isSuper) {
            for (var i = 0; i < gGhosts.length; i++) {
                 if(gGhosts[i].location.i === nextLocation.i &&
                     gGhosts[i].location.j === nextLocation.j){
                        gGhosts.splice(i, 1)
                    
                 }
            }
             renderCell(nextLocation, PACMAN)
        } else {
            gameOver()
            renderCell(gPacman.location, EMPTY)
            return
        }
    }
    if (nextCell === FOOD) {
        updateScore(1)
        gEmptyCells.push({i:nextLocation.i , j: nextLocation.j})
    }
    if (nextCell === CHERRY) {
        updateScore(10)
        gEmptyCells.push({i:nextLocation.i , j: nextLocation.j})
    }

    if (gEmptyCells.length===61) { 
        playerWon()

    }
    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // gEmptyCells.push({i:nextLocation.i , j: nextLocation.j})
    console.log('emptyCells', gEmptyCells)

    // update the DOM
    renderCell(gPacman.location, EMPTY)

    // Move the pacman
    // update the model

    gPacman.location = nextLocation;
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;

    // update the DOM
    renderCell(gPacman.location, PACMAN);
}


function getNextLocation(ev) {
    // figure out nextLocation
    // console.log('ev.code', ev.code)
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }

    switch (ev.code) {
        case 'ArrowUp':
            nextLocation.i--
            PACMAN = '👆'
            break;
        case 'ArrowDown':
            nextLocation.i++
            PACMAN = '👇'
            break;
        case 'ArrowLeft':
            nextLocation.j--
            PACMAN = '👈'
            break;
        case 'ArrowRight':
            nextLocation.j++
            PACMAN = '👉'
            break;
        default: return null
    }
    return nextLocation;
}

