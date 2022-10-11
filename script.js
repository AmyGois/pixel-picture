const container = document.querySelector('.container');

const input = document.querySelector('.inputBtn');

const blackBtn = document.querySelector('#blackBtn');
const randomBtn = document.querySelector('#randomBtn');
const greysBtn = document.querySelector('#greysBtn');

const eraserBtn = document.querySelector('#eraserBtn');
const clearBtn = document.querySelector('#clearBtn');

/* F1 - make X squares appear within a lager square - Requires F2.1 */

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

/* F2 - Different colour options for grid */

// F2.1 - Black
function colorSquareBlack(e) {
    e.target.style.backgroundColor = '#000';
}

//F2.2 - White
function colorSquareWhite(e) {
    e.target.style.backgroundColor = '#fff';
}

//F2.3 - Random colours
function colorSquareRandom(e) {
    const randomColor = Math.floor(Math.random() * 10);

    switch(randomColor) {
        case 0:
            e.target.style.backgroundColor = '#4f6b48';
            break;
        case 1:
            e.target.style.backgroundColor = '#FA7070';
            break;
        case 2:
            e.target.style.backgroundColor = '#C6EBC5';
            break;
        case 3:
            e.target.style.backgroundColor = '#fbf2cf';
            break;
        case 4:
            e.target.style.backgroundColor = '#faea70';
            break;
        case 5:
            e.target.style.backgroundColor = '#70faf3';
            break;
        case 6:
            e.target.style.backgroundColor = '#663a58';
            break;
        case 7:
            e.target.style.backgroundColor = '#502f33';
            break;
        case 8:
            e.target.style.backgroundColor = '#e7c5eb';
            break;
        case 9:
            e.target.style.backgroundColor = '#ac70fa';
            break;
    }
}

//

/* F - Change what colour the squares get filled in with, and clear other event listeners, when button is clicked  - Requires F2*/

function changeColors(colorChoice) {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.removeEventListener('mouseenter', colorSquareBlack);
        square.removeEventListener('mouseenter', colorSquareWhite);
        square.removeEventListener('mouseenter', colorSquareRandom);
    });
    
    if(colorChoice === 'black') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareBlack));
    } else if(colorChoice === 'white') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareWhite));
    } else if(colorChoice === 'random') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareRandom));
    }
    
}

blackBtn.addEventListener('click', () => changeColors('black'));
randomBtn.addEventListener('click', () => changeColors('random'));
eraserBtn.addEventListener('click', () => changeColors('white'));

//

/* F - Make a new grid of squares according to the number chosen in the input field, and clear previous grid*/

input.addEventListener('click', changeSquares);

function removeSquares() {
    let lines = document.querySelectorAll('.line');

    lines.forEach((line) => line.remove());
}

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