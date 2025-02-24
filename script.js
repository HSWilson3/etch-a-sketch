const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

function makeGrid(squares) {
    for (let i = 0; i < squares; i++) {
        let row = document.createElement("p");
        for (let j = 0; j < squares; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.className = "squareDiv";
            row.appendChild(squareDiv);
            squareDiv.addEventListener("mouseenter", () => {
                //squareDiv.style.backgroundColor = "black";
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                squareDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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

