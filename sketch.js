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
      let gridItems = document.querySelectorAll('.grid-item');
      let count = gridItems.length;
      console.log(count);
    }

  }
  sketchArea.setAttribute(
    "style",
    `display:grid;grid-template-columns:repeat(${numberOfGrid},1fr);grid-template-rows:repeat(${numberOfGrid}, 1fr); `
  );
  sketchArea.style["grid-template-columns"] = `repeat(${numberOfGrid}), 1fr`;
  sketchArea.style["grid-template-rows"] = `repeat(${numberOfGrid}), 1fr`;
}
