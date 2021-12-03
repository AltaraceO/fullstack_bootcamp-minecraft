const gameBoard = document.querySelector(".game-board");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");
const axe = document.querySelector(".axe");
const storage = document.querySelector(".storage");
const startBtn = document.querySelector(".start-button");
const gameStart = document.querySelector(".game-start");

const colors = {
  green: "green",
  brown: "brown",
  darkbrown: "darkbrown",
  white: "white",
  blue: "blue",
  gray: "gray",
};

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 1],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

//creating the elements
for (i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix[i].length; j++) {
    switch (matrix[i][j]) {
      case 5:
        createBox(colors.white);
        break;
      case 4:
        createBox(colors.brown);
        break;
      case 3:
        createBox(colors.darkbrown);
        break;
      case 2:
        createBox(colors.green);
        break;
      case 1:
        createBox(colors.gray);
        break;
      case 0:
        createBox(colors.blue);
        break;
    }
  }
}

function createBox(cls) {
  let box = document.createElement("div");
  box.classList.add(cls);
  gameBoard.appendChild(box);
  // box.addEventListener("click", clickFunc);
}

// function clickFunc(e) {
//   e.target.setAttribute("class", "colors.blue");
//   console.log(e);
//   console.dir(e.target);
// }

startBtn.addEventListener("click", function (e) {
  gameStart.style.display = "none";
  gameBoard.style.display = "grid";
});
// function toolSelect() {}

gameBoard.addEventListener("click", function (e) {
  if (
    e.target.className !== "blue" &&
    e.target.className !== "white" &&
    e.target.className !== "game-board"
  ) {
    let compStyle = window.getComputedStyle(e.target);
    let bcCol = compStyle.getPropertyValue("background-color");
    storage.style.backgroundColor = bcCol;
    e.target.setAttribute("class", "blue");
  }
});

storage.addEventListener("click", function (e) {
  const compBC = window.getComputedStyle(e.target);
  const currBc = compBC.getPropertyValue("background-color");
  gameBoard.addEventListener("click", function (e) {
    if (
      e.target.className !== "game-board" &&
      currBc !== "rgb(255, 255, 255)"
    ) {
      e.target.style.backgroundColor = currBc;
    }
  });
});
