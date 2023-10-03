const gridWidth = 16;
const container = document.querySelector('.container');

for (let i = 1; i <= Math.pow(gridWidth, 2); i++) {
  const gridCell = document.createElement('div');
  gridCell.classList.add('grid-cell');
  container.appendChild(gridCell);
}