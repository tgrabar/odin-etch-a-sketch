const gridWidth = 16;
const container = document.querySelector('.container');

// create grid with height = width
for (let i = 1; i <= Math.pow(gridWidth, 2); i++) {
  const gridCell = document.createElement('div');
  gridCell.classList.add('grid-cell');
  container.appendChild(gridCell);
}

document.querySelectorAll('.grid-cell').forEach(cell => {
  cell.addEventListener('mouseenter', () => changeColor(cell))
})

function changeColor(cell) {
  cell.style.backgroundColor = 'black';
}