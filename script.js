const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const html = document.querySelector("html");

//console.log(container.firstChild);

function makeGrid(squares) {
    for (let i = 0; i < squares; i++) {
        let row = document.createElement("div");
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
        /* let size = 100 / squares;
        console.log(html.clientHeight);
        console.log(html.clientWidth); */
        let windowWidth = html.clientWidth;
        let windowHeight = html.clientHeight;
        if (windowWidth <= windowHeight) {
            let rowWidth = Math.floor(windowWidth * 0.75);
            row.style.width = `${rowWidth}px`; 
            row.style.height = `${Math.floor(rowWidth / squares)}px`;
        } else {
            let rowWidth = Math.floor(windowHeight * 0.75);
            row.style.width = `${rowWidth}px`;
            row.style.height = `${Math.floor(rowWidth / squares)}px`;
        }
        /* if (html.clientWidth <= html.clientHeight) {
            row.style.height = `${size}vw`;
        } else {
            row.style.height = `${size}vh`;
        } */
        //row.style.height = `${size}vw`;
        container.appendChild(row);
    }
}

container.addEventListener("load", makeGrid(15));

resetButton.addEventListener("click", () => {
    while (container.hasChildNodes() && container.lastChild.nodeName != "BUTTON") {
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

