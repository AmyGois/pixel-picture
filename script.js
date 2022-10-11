const container = document.querySelector('.container');

/* F1 - make X squares appear within a lager quare*/
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

function colorSquareBlack(e) {
    e.target.style.backgroundColor = '#000';
}