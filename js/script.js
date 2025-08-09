const body = document.querySelector("body");
const grid_div = document.createElement("div");
const sizeButton = document.createElement("button");

/**
    *The function that prompts the user to input new size
*/
function inputNewSize(){
    const n = prompt("Enter a new grid width between 1-100:");
    // constrain n to [0,100]
    n = Math.min(n, 100);
    n = Math.max(n, 0);
    grid_div.replaceChildren();
    createGrid(grid_div, n);
}

/**
    *Changes background color of event listener element to black
*/
function changeColor(e){
    e.target.style.backgroundColor = "black";
}

/**
    * function that actually makes the grid structure and each cell
*/
function createGrid(grid, width){
    grid_div.style.setProperty("--cols", width);
    for (let i=0; i<width; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")
        for (let j=0; j<width; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            newDiv.addEventListener("mouseover", changeColor);
            rowDiv.appendChild(newDiv);
        }
        grid.appendChild(rowDiv);
    }
}

grid_div.classList.add("grid");
sizeButton.addEventListener("click", inputNewSize);
sizeButton.textContent = "Change Size";
body.appendChild(sizeButton);
body.appendChild(grid_div);

const initSize = 16;
createGrid(grid_div, initSize);
