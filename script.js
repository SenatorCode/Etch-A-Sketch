const grid = document.getElementById("grid");
const gridWidth = grid.clientWidth;
const gridHeight = grid.clientHeight;
const newGridBtn = document.querySelector("#new-grid");
const colorBtn = document.querySelector("#color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const customGridBtn = document.querySelector("#custom-grid");
const customGridModal = document.querySelector("#customGridModal");
const gridInput = document.querySelector("#gridInput");
const confirmGridBtn = document.querySelector("#confirmGridBtn");
const cancelGridBtn = document.querySelector("#cancelGridBtn");

let currentColor = "#000000";
let rainbowMode = false;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function attachListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            if (rainbowMode) {
                cell.style.backgroundColor = getRandomColor();
            } else {
                cell.style.backgroundColor = currentColor;
            }
        });
    });
}

function createGrid(cellNum = 16) {
    grid.innerHTML = "";
    for (let i = 0; i < cellNum * cellNum; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const cellWidth = gridWidth / cellNum;
        const cellHeight = gridHeight / cellNum;
        cell.style.width = cellWidth + "px";
        cell.style.height = cellHeight + "px";
        grid.appendChild(cell);
    }
    attachListeners();
}

createGrid();

newGridBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "#ffffff";
    });
});

colorBtn.addEventListener("click", () => {
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = currentColor;
    colorInput.addEventListener("change", (e) => {
        currentColor = e.target.value;
        rainbowMode = false;
    });
    colorInput.click();
});

rainbowBtn.addEventListener("click", () => {
    rainbowMode = !rainbowMode;
    rainbowBtn.style.boxShadow = rainbowMode ? "0 8px 20px rgba(168, 85, 247, 0.4)" : "0 8px 20px rgba(6, 182, 212, 0.4)";
});

customGridBtn.addEventListener("click", () => {
    customGridModal.classList.add("show");
    gridInput.focus();
});

confirmGridBtn.addEventListener("click", () => {
    let gridNum = parseInt(gridInput.value);
    if (gridNum >= 2 && gridNum <= 100) {
        createGrid(gridNum);
        customGridModal.classList.remove("show");
        gridInput.value = "";
    } else {
        alert("Please enter a number between 2 and 100");
    }
});

cancelGridBtn.addEventListener("click", () => {
    customGridModal.classList.remove("show");
    gridInput.value = "";
});

gridInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        confirmGridBtn.click();
    }
});