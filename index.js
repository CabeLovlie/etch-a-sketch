// Get each of the page elements
const gridContainer = document.getElementById("grid-container");
const gridSizeLabel = document.getElementById("grid-size-label");
const sizeInput = document.getElementById("size-input");
const rainbowButton = document.getElementById("rainbow-button")
const resetButton = document.getElementById("reset-button");
const eraseButton = document.getElementById("eraser-button");
const colorPicker = document.getElementById("color-picker");

// Function to create the grid, and populate it with the boxes
function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Loop to draw the boxes
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Even listeners to detect for mouse click and mouse over
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = colorPicker.value;
    });
    gridContainer.appendChild(gridItem);
  }
}

// Changes the size of the grid based on the value input in the grid size field
sizeInput.addEventListener("input", () => {
  const size = sizeInput.value;
  gridSizeLabel.textContent = `${size} X ${size}`
  createGrid(size);
});

// Event listener to get the color selected in the picker
colorPicker.addEventListener('input', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.gorEach((box) => {
    box.style.backgroundColor = colorPicker.value;
  });
});

// Resets the screen
resetButton.addEventListener("click", () => {
  const size = sizeInput.value;
  createGrid(size);
});

rainbowButton.addEventListener('click', () => {
  const cells = gridContainer.querySelectorAll('div');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const color = `rgb(${r}, ${g}, ${b})`;
      cell.style.backgroundColor = color;
    });
  });
});

eraseButton.addEventListener('click', () => {
  const cells = gridContainer.querySelectorAll('div');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'white';
    });
  });
});

createGrid(sizeInput.value);
