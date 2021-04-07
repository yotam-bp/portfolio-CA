function printMat(mat, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
      strHTML += '<tr>';
      for (var j = 0; j < mat[0].length; j++) {
        var cell = mat[i][j];
        var className = 'cell cell' + i + '-' + j;
        strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
      }
      strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
  }



  // location such as: {i: 2, j: 7}
  function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    elCell.innerHTML = value;
  }

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
