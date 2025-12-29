const grid = document.getElementById("grid");
const gridWidth = grid.clientWidth;
const gridHeight = grid.clientHeight;
let cellNum = 50;
for (let i = 0; i < cellNum * cellNum; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellWidth = gridWidth/cellNum;
    const cellHeight = gridHeight/cellNum;
    cell.style.width = cellWidth + "px";
    cell.style.height = cellHeight + "px";
    grid.appendChild(cell)
}

const cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () =>{
        cell.style.backgroundColor = "red";
    });
});