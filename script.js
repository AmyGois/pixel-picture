const container = document.querySelector('.container');

function makeSquares(length) {
    for(i = 1; i <= length; i++) {
        let line = document.createElement('div');
        line.className = 'line';
        for(o = 1; o <= length; o++) {
            let square = document.createElement('div');
            square.className = 'square';
            line.appendChild(square);
        }
        container.appendChild(line);
        line.style.height = getComputedStyle(document.querySelector('.square')).width;
    }
}

makeSquares(16);