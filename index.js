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

createSquares(16);