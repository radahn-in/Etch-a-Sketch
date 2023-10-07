function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const container = document.querySelector('#container');

const numRows = 16;
const numCols = 16;

let isHovering = false;

for (let i = 0; i< (numRows * numCols); i++){
    const gridItems = document.createElement('div');
    gridItems.classList.add('grid-item');
    

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




