const grid_div= document.querySelector('#grid');

function createGrid(grid, width){
    grid_div.style.setProperty("--cols", width);
    for (let i=0; i<width; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")
        for (let j=0; j<width; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            rowDiv.appendChild(newDiv);
            newDiv.textContent = `This is div ${i}. ${j}`;
        }
        grid.appendChild(rowDiv);
    }
}
let n = 100;
createGrid(grid_div, n);
