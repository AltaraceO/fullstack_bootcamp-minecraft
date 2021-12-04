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

let currentTool;
let currentBtn;

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
  startBtn.addEventListener("click", function (e) {
    gameStart.style.display = "none";
    gameBoard.style.display = "grid";
    createGameDisplay();
  });
  threeBtns.addEventListener("click", checkTool);

  storage.addEventListener("click", function (e) {
    removeBackground();
    turnOffPrevEvent(currentTool);
    gameBoard.addEventListener("click", storageToBox);
  });
}
minecraftMain();

function checkTool(e) {
  let materialFunc;
  let toolButton;

  switch (e.target.className) {
    case "pickaxe tool":
      materialFunc = stoneFunc;
      toolButton = e.target;
      break;

    case "shovel tool":
      materialFunc = dirtFunc;
      toolButton = e.target;
      break;

    case "axe tool":
      materialFunc = treeFunc;
      toolButton = e.target;
      break;

    default:
      break;
  }

  toolSwitcher(materialFunc);
  backgroundSwitcher(toolButton);
}

function turnOffPrevEvent(curr) {
  gameBoard.removeEventListener("click", curr);
}

function removeBackground() {
  if (currentBtn !== undefined) currentBtn.classList.remove("white-back");
}
function backgroundSwitcher(item) {
  removeBackground();
  item.classList.add("white-back");
  currentBtn = item;
}

function toolSwitcher(material) {
  turnOffPrevEvent(currentTool);
  gameBoard.addEventListener("click", material);
  currentTool = material;
}

function stoneFunc(e) {
  const tool = pickaxe;
  if (e.target.className === "gray") {
    pickFunc(e);
  } else {
    wrongMaterial(e, tool);
  }
}

function dirtFunc(e) {
  const tool = shovel;
  if (e.target.className === "brown") {
    pickFunc(e);
  } else {
    wrongMaterial(e, tool);
  }
}

function treeFunc(e) {
  const tool = axe;
  if (e.target.className === "darkbrown" || e.target.className === "green") {
    pickFunc(e);
  } else {
    wrongMaterial(e, tool);
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

function wrongMaterial(e, tool) {
  if (e.target.className !== "blue" && e.target.className !== "white") {
    tool.classList.add("red-shadow");
    setTimeout(() => {
      tool.classList.remove("red-shadow");
    }, 100);
  }
}

// storage box functions --------------------------------

function storageToBox(e) {
  if (e.target.className !== "game-board" && storage.className !== "storage") {
    e.target.setAttribute("class", storage.className);
    storage.setAttribute("class", "storage");
  }
  this.removeEventListener("click", arguments.callee);
}
