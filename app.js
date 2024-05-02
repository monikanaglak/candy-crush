document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let width = 8;
  let squares = [];
  let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
  function create_board() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let random_color = Math.floor(Math.random() * colors.length);
      square.classList.add("square");
      square.style.background = colors[random_color];

      squares.push(square);
      container.appendChild(square);
    }
  }
  create_board();
  let color_being_dragged;
  //events
  squares.forEach((square) => square.addEventListener("dragstart", dragstart));
  squares.forEach((square) => square.addEventListener("dragend", dragend));
  squares.forEach((square) => square.addEventListener("dragover", dragover));
  squares.forEach((square) => square.addEventListener("dragenter", dragenter));
  squares.forEach((square) => square.addEventListener("dragleave", dragleave));
  squares.forEach((square) => square.addEventListener("drop", dragdrop));

  function dragstart() {
    console.log(this.id);
    color_being_dragged = this.style.background;
    console.log(color_being_dragged)
  }
  function dragend() {
    console.log(this.id);
  }
  function dragover() {
    console.log(this.id);
  }
  function dragenter() {
    console.log(this.id);
  }
  function dragleave() {
    console.log(this.id);
  }
  let squareIdBeingDragged;
  let colorBeingReplaced;

  function dragdrop() {
    console.log(this.id, "dragDrop");
    colorBeingReplaced = this.style.backgroundColor;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  }
});
