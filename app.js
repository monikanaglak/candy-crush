document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let width = 8;
  let squares = [];
  let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
  function create_board() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute('draggable',true);
      let random_color = Math.floor(Math.random() * colors.length);
      square.classList.add("square");
      square.style.background = colors[random_color];
      
      squares.push(square)
      container.appendChild(square);
    }
  }
  create_board();
});
