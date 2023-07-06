const WHITE = '#FFFFFF';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const removeAllChildren = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const createSquares = (numSquares) => {
    const container = document.querySelector(".squares-container");
    removeAllChildren(container);
    container.setAttribute("style", "grid-template-columns: " + 
                                    "repeat(" + numSquares + ", 1fr);");

    for(let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");

        square.addEventListener('mousedown', changeColor);
        square.addEventListener('mouseover', changeColor);

        container.appendChild(square)
    }
}

const changeColor = (event) => {
    if(event.type === 'mouseover' && !mouseDown) return;
    if(eraserButton.classList.contains('toggle')) {
        event.target.style["background-color"] = WHITE;
    } else {
        event.target.style["background-color"] = colorInput.value;
    }
}

createSquares(16);

let colorInput = document.querySelector(".rgb");
let hexInput = document.querySelector(".hex-value");
const setRGB = (color) => {
    hexInput.value = color;
};
colorInput.addEventListener('input', 
                            function () {
                                setRGB(colorInput.value);
                            }
);

let form = document.querySelector("#form");
let regex = /#[0-9A-Fa-f]{6}/g;
const setHex = (hex) => {
    if(hex.match(regex)) {
        colorInput.value = hex;
    }
};
form.addEventListener('submit', 
                    function () {
                        setHex(hexInput.value); 
                    }
);

let eraserButton = document.querySelector('.eraser');

let randomColorButton = document.querySelector(".random");
randomColorButton.addEventListener("click", () => {
    eraserButton.classList.remove('toggle');
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
    setRGB(randomColor);
})

const toggleButton = (element) => {
    element.classList.toggle('toggle');
}

eraserButton.addEventListener('click', function () {
    toggleButton(this);
});

const clear = () => {
    const squares = document.querySelectorAll(".square");
    eraserButton.classList.remove('toggle');
    squares.forEach((square) => {
        square.style["background-color"] = WHITE;
    });
};

let clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clear);

let slider = document.querySelector('.slider');
slider.addEventListener('change', () => {
    createSquares(slider.value);
});


