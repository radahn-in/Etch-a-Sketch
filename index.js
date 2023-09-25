const container = document.querySelector('#container');

const numRows = 16;
const numCols = 16;

for (let i = 0; i< (numRows * numCols); i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i + 1;
    container.appendChild(gridItem);
}

