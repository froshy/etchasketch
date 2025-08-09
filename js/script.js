const grid_div= document.querySelector('#grid');

function createGrid(grid, width){
    for (let i=0; i<width; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")
        for (let j=0; j<width; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            rowDiv.appendChild(newDiv);
            newDiv.textContent = `This is div ${i}. ${j}`;
        }
        grid_div.appendChild(rowDiv);
    }
}

createGrid(grid_div, 5);
