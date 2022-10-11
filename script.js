const container = document.querySelector('.container');

const input = document.querySelector('.inputBtn');
/* F1 - make X squares appear within a lager quare */

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

//const squares = document.querySelectorAll('.square')
//addEventListener('mouseenter', colorSquare);

/* F2 - make squares black when hovered over with mouse
        Requires F1 */

function colorSquareBlack(e) {
    e.target.style.backgroundColor = '#000';
}

/* F2 - remove all the squares in the container div */

function removeSquares() {
    let lines = document.querySelectorAll('.line');

    lines.forEach((line) => line.remove());
}

/* F3 - Make a new grid of squares according to the number chosen in the input field */

input.addEventListener('click', changeSquares);

function changeSquares() {
    let numberOfSquares = document.querySelector('.inputField').value;
    
    if(numberOfSquares < 1 || numberOfSquares > 100) {
        let errorMessage = document.querySelector('.errorMessage');
        errorMessage.textContent = "That number won't do. Please choose a number between 1 and 100."
    } else {
        removeSquares();
        makeSquares(numberOfSquares);
    }
}