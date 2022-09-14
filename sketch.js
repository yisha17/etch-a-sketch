const sketchArea = document.querySelector(".sketch-area");
const gridNumber = document.querySelector("#grid-size");


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
function drawGrid() {

  removeAllChildNodes(sketchArea);
  var numberOfGrid = gridNumber.value;
  for (let i = 1; i <= numberOfGrid; i++) {
    for (let j = 1; j <= numberOfGrid; j++) {
      
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      sketchArea.appendChild(gridItem);
    }
  }
  sketchArea.setAttribute(
    "style",
    `display:grid;grid-template-columns:repeat(${numberOfGrid},1fr);grid-template-rows:repeat(${numberOfGrid}, 1fr); `
  );
  sketchArea.style["grid-template-columns"] = `repeat(${numberOfGrid}), 1fr`;
  sketchArea.style["grid-template-rows"] = `repeat(${numberOfGrid}), 1fr`;
  shading();
}

drawGrid();

function chooseColor(grid){
  let colorInput = document.querySelector('#color');
  let colorChoice = colorInput.value;
  return colorChoice;
}


function oneColor(){
  let gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((grid) => {
    grid.addEventListener('mouseover', function(e)  {
      e.target.setAttribute('style',`background-color: ${chooseColor()}`)
    });
  })
}

function randomizecolor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(){
  let gridItem = document.querySelectorAll('.grid-item');

  gridItem.forEach((grid) => {
    grid.addEventListener('mouseover', function(e){
      e.target.setAttribute('style', `background-color: rgb(${randomizecolor(0,255).toString()},${randomizecolor(0,255).toString()},${randomizecolor(0,255).toString()})`)
    })
  })
}



function shading(){
  let gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((grid) => {
    grid.setAttribute('style', 'background-color: rgb(215,255,255)');
    grid.addEventListener('mouseover', darken )
  })
}

function darken(e) {
  let oldColor = e.target.style.backgroundColor;
   let singleColor = oldColor.slice(4,9)
   let currentColor = parseInt(singleColor) - 15;

   if(currentColor <= 0) return;
   else{
    let colorString = currentColor.toString();
    return e.target.style.backgroundColor = `rgb(${colorString},${colorString},${colorString})`
   }
}




