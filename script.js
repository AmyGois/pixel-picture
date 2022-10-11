const container = document.querySelector('.container');

const input = document.querySelector('.inputBtn');

const eraserBtn = document.querySelector('#eraserBtn');
const blackBtn = document.querySelector('#blackBtn');
const randomBtn = document.querySelector('#randomBtn');

/* F1 - make X squares appear within a lager square - Requires F2 */

function makeSquares(length) {
    for(i = 1; i <= length; i++) {
        let line = document.createElement('div');
        line.className = 'line';
        for(o = 1; o <= length; o++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.addEventListener('mouseenter', colorSquareBlack);
            line.appendChild(square);
        }
        container.appendChild(line);
        line.style.height = getComputedStyle(document.querySelector('.square')).width;
    }
}

makeSquares(16);

//

/* F2 - make squares black when hovered over with mouse */

function colorSquareBlack(e) {
    e.target.style.backgroundColor = '#000';
}

//

/* F3 - make squares white when hovered over with mouse */

function colorSquareWhite(e) {
    e.target.style.backgroundColor = '#fff';
}

//

/* F - Change what colour the sqares get filled in with, and clear other event listeners */

function changeColors(colorChoice) {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.removeEventListener('mouseenter', colorSquareBlack);
        square.removeEventListener('mouseenter', colorSquareWhite);
    });
    
    if(colorChoice === 'black') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareBlack));
    } else if(colorChoice === 'white') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareWhite));
    }
    
}

blackBtn.addEventListener('click', () => changeColors('black'));
eraserBtn.addEventListener('click', () => changeColors('white'));


/* F - remove all the squares in the container div */

function removeSquares() {
    let lines = document.querySelectorAll('.line');

    lines.forEach((line) => line.remove());
}

//

/* F - Make a new grid of squares according to the number chosen in the input field - Requires F*/

input.addEventListener('click', changeSquares);

function changeSquares() {
    let numberOfSquares = document.querySelector('.inputField').value;
    let errorMessage = document.querySelector('.errorMessage');

    if(numberOfSquares < 1 || numberOfSquares > 100) {
        errorMessage.textContent = "That number won't do. Please choose a number between 1 and 100.";
    } else {
        removeSquares();
        makeSquares(numberOfSquares);
        errorMessage.textContent = "";
    }
}

//