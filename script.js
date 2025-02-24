const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

function makeGrid(squares) {
    for (let i = 0; i < squares; i++) {
        let row = document.createElement("p");
        for (let j = 0; j < squares; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.className = "squareDiv";
            row.appendChild(squareDiv);
            //console.log(squareDiv);
            squareDiv.addEventListener("mouseenter", () => {
                squareDiv.style.backgroundColor = "black";
            });
        }
        row.className = "row";
        let height = 100 / squares;
        row.style.height = `${height}vw`;
        container.appendChild(row);
    }
}

resetButton.addEventListener("click", () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    let input;
    while (true) {
        input = prompt("How many squares per side?");
        if (parseInt(input) <= 100) {
            break;
        }
    };
    
    makeGrid(parseInt(input));
});

