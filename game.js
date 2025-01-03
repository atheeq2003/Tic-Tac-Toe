let grids = document.querySelectorAll(".grid");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let turnX = true;
let count = 0;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Click functionality
grids.forEach((grid) => {
  grid.addEventListener("click", () => {
    if (turnO == true) {
      grid.innerText = "O";
      grid.style.color = "#3498DB";
      turnO = false;
    } else {
      grid.innerText = "X";
      grid.style.color = "#FF5733";
      turnO = true;
    }
    grid.disabled = true;
    count++;
    let isWinner = checkWinner();
    if(count == 9 && !isWinner) {
        gameDraw();
    }
  });
});

const gameDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableGrids();
}


const resetGame = () => {
  turnO = true;
  count = 0;
  enableGrids();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Checking Winner functionality
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = grids[pattern[0]].innerText;
    let pos2Val = grids[pattern[1]].innerText;
    let pos3Val = grids[pattern[2]].innerText;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disableGrids();
        return true;
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};


const disableGrids = () => {
  for (let grid of grids) {
    grid.disabled = true;
  }
};

const enableGrids = () => {
  for (let grid of grids) {
    grid.disabled = false;
    grid.innerText = "";
  }
};