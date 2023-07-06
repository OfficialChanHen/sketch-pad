const WHITE = '#FFFFFF';

const createSquares = (numSquares) => {
    const container = document.querySelector(".squares-container");
    container.setAttribute("style", "grid-template-columns: " + 
                                    "repeat(" + numSquares + ", 1fr);");

    for(let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        container.appendChild(square)
    }
}

createSquares(6);

let colorInput = document.querySelector(".rgb");
let hexInput = document.querySelector(".hex-value");
const setRGB = (color) => {
    console.log(color);
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

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener('click', () => {
        square.style["background-color"] = colorInput.value;
    });
});

let randomColorButton = document.querySelector(".random");
randomColorButton.addEventListener("click", () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
    setRGB(randomColor);
})

const clear = () => {
    squares.forEach((square) => {
        square.style["background-color"] = WHITE;
    });
};

let clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clear);

