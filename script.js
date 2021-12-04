const gameBoard = document.querySelector(".game-board");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");
const axe = document.querySelector(".axe");
const storage = document.querySelector(".storage");
const startBtn = document.querySelector(".start-button");
const gameStart = document.querySelector(".game-start");
const threeBtns = document.querySelector(".three-buttons");

const colors = {
  green: "green",
  brown: "brown",
  darkbrown: "darkbrown",
  white: "white",
  blue: "blue",
  gray: "gray",
  storage: "storage",
};

function createGameDisplay() {
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
  }
}

function minecraftMain() {
  createGameDisplay();

  startBtn.addEventListener("click", function (e) {
    gameStart.style.display = "none";
    gameBoard.style.display = "grid";
  });
  threeBtns.addEventListener("click", checkTool);

  storage.addEventListener("click", function (e) {
    turnOffPrevEvent(currentEvent);
    gameBoard.addEventListener("click", storageToBox);
  });
}
minecraftMain();

let currentEvent;

function checkTool(e) {
  switch (e.target.className) {
    case "pickaxe tool":
      turnOffPrevEvent(currentEvent);
      gameEvnListener(stoneFunc);
      console.log("pickaxe");
      break;

    case "shovel tool":
      turnOffPrevEvent(currentEvent);
      gameEvnListener(dirtFunc);
      console.log("shovel");
      break;

    case "axe tool":
      turnOffPrevEvent(currentEvent);
      gameEvnListener(treeFunc);
      console.log("axe");
      break;

    // case "storage":
    //   storeEvent();
    //   console.log("storage");
    //   break;

    default:
      break;
  }
}

function turnOffPrevEvent(curr) {
  gameBoard.removeEventListener("click", curr);
}

function gameEvnListener(material) {
  gameBoard.addEventListener("click", material);
  currentEvent = material;
}

function stoneFunc(e) {
  if (e.target.className === "gray") {
    pickFunc(e);
  }
}

function dirtFunc(e) {
  if (e.target.className === "brown") {
    pickFunc(e);
  }
}

function treeFunc(e) {
  if (e.target.className === "darkbrown" || e.target.className === "green") {
    pickFunc(e);
  }
}

function pickFunc(e) {
  const targetCls = e.target.getAttribute("class");
  const currentStoreCls = storage.className;

  storage.classList.replace(currentStoreCls, targetCls);
  storage.style.width = "30px";
  storage.style.height = "30px";

  e.target.setAttribute("class", "blue");
  this.removeEventListener("click", arguments.callee);
}

// storage box functions --------------------------------

function storageToBox(e) {
  if (e.target.className !== "game-board" && storage.className !== "storage") {
    e.target.setAttribute("class", storage.className);
    storage.setAttribute("class", "storage");
  }
  this.removeEventListener("click", arguments.callee);
}
