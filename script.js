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
            square.style.backgroundColor = '#fff';
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

//F2.4 - Greyscale

function colorSquareGreyscale(e) {
    const currentColor = e.target.style.backgroundColor;
    
    switch(currentColor) {
        case 'rgb(255, 255, 255)':
            e.target.style.backgroundColor = 'rgb(230, 230, 230)';
            break;
        case 'rgb(230, 230, 230)':
            e.target.style.backgroundColor = 'rgb(205, 205, 205)';
            break;
        case 'rgb(205, 205, 205)':
            e.target.style.backgroundColor = 'rgb(180, 180, 180)';
            break;
        case 'rgb(180, 180, 180)':
            e.target.style.backgroundColor = 'rgb(155, 155, 155)';
            break;
        case 'rgb(155, 155, 155)':
            e.target.style.backgroundColor = 'rgb(130, 130, 130)';
            break;
        case 'rgb(130, 130, 130)':
            e.target.style.backgroundColor = 'rgb(105, 105, 105)';
            break;
        case 'rgb(105, 105, 105)':
            e.target.style.backgroundColor = 'rgb(80, 80, 80)';
            break;
        case 'rgb(80, 80, 80)':
            e.target.style.backgroundColor = 'rgb(55, 55, 55)';
            break;
        case 'rgb(55, 55, 55)':
            e.target.style.backgroundColor = 'rgb(30, 30, 30)';
            break;
        case 'rgb(30, 30, 30)':
            e.target.style.backgroundColor = 'rgb(0, 0, 0)';
            break;
        case 'rgb(0, 0, 0)':
            e.target.style.backgroundColor = 'rgb(0, 0, 0)';
            break;
        default:
            e.target.style.backgroundColor = 'rgb(255, 255, 255)';
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
        square.removeEventListener('mouseenter', colorSquareGreyscale);
    });
    
    if(colorChoice === 'black') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareBlack));
    } else if(colorChoice === 'white') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareWhite));
    } else if(colorChoice === 'random') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareRandom));
    } else if(colorChoice === 'greyscale') {
        squares.forEach((square) =>  square.addEventListener('mouseenter', colorSquareGreyscale));
    }
    
}

blackBtn.addEventListener('click', () => changeColors('black')); //F2.1
randomBtn.addEventListener('click', () => changeColors('random')); //F2.3
greysBtn.addEventListener('click', () => changeColors('greyscale')); //F2.4
eraserBtn.addEventListener('click', () => changeColors('white')); //F2.2

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