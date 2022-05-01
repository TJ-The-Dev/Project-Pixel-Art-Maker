// Select color input //
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");

// Select size input //
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid() //
function makeGrid(height, width) {
  for (let y = 0; y < height; y++) {
    let row = canvas.insertRow(y);
    for (let x = 0; x < width; x++) {
      let cell = row.insertCell(x);
      cell.addEventListener("mousedown", function(evt) {
          cell.style.backgroundColor = color.value;
      cell.addEventListener("contextmenu", function(evt) {
          evt.preventDefault();
          cell.style.backgroundColor = "white";
      } )
      } )
    }
  }
}

// Choose canvas size //
sizePicker.addEventListener("submit", function(evt) {
  evt.preventDefault();
  while (canvas.hasChildNodes()) {
      canvas.removeChild(canvas.lastChild);
  }
  makeGrid(height.value, width.value);
});





