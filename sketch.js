const sketchArea = document.querySelector(".sketch-area");
const gridNumber = document.querySelector("#grid-size");
const showGrid = document.querySelector('.show-grid');
var task = 'oneColor';
const btnRandom = document.querySelector('#rainbow');
const btnEraser = document.querySelector("#eraser");
const btnShading = document.querySelector('#rainbow')
const btnOneColor = document.querySelector("#random");


btnRandom.addEventListener('click', changeTask);
btnEraser.addEventListener("click", changeTask);
btnShading.addEventListener("click", changeTask);
btnOneColor.addEventListener("click", changeTask);





function changeTask(e){
  switch (e.target.id){
  
    case 'rainbow':
      task = 'random';
      console.log(e.target.id);
      console.log(task)
      drawGrid();
      break;
    
      case 'eraser':
        task = 'erase';
        drawGrid();
        break;
     
        case 'random':
        task = 'oneColor';
        drawGrid();
        break;

        case 'shading':
          task = 'shading';
          drawGrid();
  }
}

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

  showGrid.textContent = `Grid Size: ${numberOfGrid} x ${numberOfGrid}  `;
  switch(task){
    case 'oneColor':{
      oneColor();
      break;
    }
    case 'random':{
      randomColor();
       break;
    }

    case 'shading':{
      shading();
       break;
    }
    case 'erase':{
      eraser();
       break;
    }
    
  }
}

drawGrid();

function chooseColor(grid) {
  let colorInput = document.querySelector("#color");
  let colorChoice = colorInput.value;
  return colorChoice;
}


  function oneColor() {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach((grid) => {
      grid.addEventListener("mouseover", function (e) {
        e.target.setAttribute("style", `background-color: ${chooseColor()}`);
      });
    });
  }

  function randomizecolor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomColor() {
    let gridItem = document.querySelectorAll(".grid-item");

    gridItem.forEach((grid) => {
      grid.addEventListener("mouseover", function (e) {
        e.target.setAttribute(
          "style",
          `background-color: rgb(${randomizecolor(
            0,
            255
          ).toString()},${randomizecolor(0, 255).toString()},${randomizecolor(
            0,
            255
          ).toString()})`
        );
      });
    });
  }
function shading() {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((grid) => {
    grid.setAttribute("style", "background-color: rgb(215,255,255)");
    grid.addEventListener("mouseover", darken);
  });
}
  function darken(e) {
    let oldColor = e.target.style.backgroundColor;
    let singleColor = oldColor.slice(4, 9);
    let currentColor = parseInt(singleColor) - 15;

    if (currentColor <= 0) return;
    else {
      let colorString = currentColor.toString();
      return (e.target.style.backgroundColor = `rgb(${colorString},${colorString},${colorString})`);
    }
  }


function clearGrid() {
  let gridItem = document.querySelectorAll(".grid-item");

  gridItem.forEach((grid) => {
    grid.style.backgroundColor = "rgb(255,255,255)";
  });
}

function eraser(){
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((grid) => {
    grid.addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = 'rgb(255,255,255)';
    })
  })
}


