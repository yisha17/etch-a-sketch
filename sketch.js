


const  sketchArea = document.querySelector('.sketch-area');
const gridNumber = document.querySelector('#grid-size');



function drawGrid(){
 var numberOfGrid = gridNumber.value;
 
 
 for (let i = 1 ; i <= numberOfGrid ** 2; i++){
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    sketchArea.appendChild(gridItem);
 }
 let gridItem = document.querySelector('.grid-item');
 gridItem.style.border = '1px solid grey';
 sketchArea.setAttribute('style', `display:grid;grid-template-columns:repeat(${numberOfGrid},1fr);grid-template-rows:repeat(${numberOfGrid}, 1fr); `)
 sketchArea.style['grid-template-columns']= `repeat(${numberOfGrid}), 1fr`;
 sketchArea.style['grid-template-rows']= `repeat(${numberOfGrid}), 1fr`;
}

drawGrid();



