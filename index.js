function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const container = document.querySelector('#container');

let isHovering = false;

function resizeGrid() {
    const gridSize = parseInt(prompt('Enter the number of squares per side (max 100):', '16'),10);


    if (isNaN(gridSize) || gridSize <= 0 || gridSize >100){
        alert('please enter a valid number between 1 and 100.');
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const itemWith = (960 - (gridSize - 1) * 2) / gridSize;

    for (let i = 0; i< (gridSize * gridSize); i++){
        const gridItems = document.createElement('div');
        gridItems.classList.add('grid-item');
        gridItems.style.width = `${itemWith}px`;
        gridItems.style.height = `${itemWith}px`;
        
    
        gridItems.addEventListener('mouseover', function(event) {
            if(event.buttons === 1){
                isHovering = true;
            }
    
            if(isHovering) {
                const gridItems = event.target;
                const randomColor = getRandomColor();
                gridItems.style.backgroundColor = randomColor;
            }
        });
    
        gridItems.addEventListener('mouseout', function() {
            isHovering = false;
            
        })
    
        container.appendChild(gridItems);
    }
}

document.getElementById('resizeGridButton').addEventListener('click', resizeGrid);

resizeGrid();






