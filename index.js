const container = document.querySelector('#container');

const numRows = 16;
const numCols = 16;


for (let i = 0; i< (numRows * numCols); i++){
    const gridItems = document.createElement('div');
    gridItems.classList.add('grid-item');
    gridItems.textContent = i + 1;

    gridItems.addEventListener('mouseover', function() {
        const randomColor = getRandomColor();
        gridItems.style.backgroundColor = randomColor;
    });

    gridItems.addEventListener('mouseout', function() {
        gridItems.style.backgroundColor = 'white';
    })



    container.appendChild(gridItems);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// const gridItems = document.querySelectorAll('grid-item');

// gridItems.forEach((item) => {
//     item.addEventListener('mouseover', function() {
//         const randomColor = getRandomColor();
//         item.style.backgroundColor = randomColor;
//     });

//     item.addEventListener('mouseout',function(){
//         item.style.backgroundColor = 'white';
//     });
// });

