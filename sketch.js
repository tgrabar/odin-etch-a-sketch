const container = document.querySelector('.container');
const gridSizeInput = document.querySelector('#gridsize');
const colorInput = document.querySelector('#color-choice')

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener("click", () => resetGrid(validateGridSize()));

// create 16x16 default grid
createGrid(16);

function createGrid (gridSize) {
  for (let i = 1; i <= Math.pow(gridSize, 2); i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    container.appendChild(gridCell);
  }
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

container.addEventListener('pointerover', e => {
  if (e.target.matches('.grid-cell') && e.buttons > 0) {
    e.target.style.backgroundColor = colorInput.value;
  }
})

function resetGrid(gridSize) {
  container.replaceChildren();
  createGrid(gridSize);
}

// default 16x16 if invalid input
function validateGridSize () {
  if (gridSizeInput.validity.valid && !gridSizeInput.validity.valueMissing) return gridSizeInput.value;
  else return 16;
}