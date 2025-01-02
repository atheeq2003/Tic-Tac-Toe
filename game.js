let grids = document.querySelectorAll(".grid");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;
let turnX = true;

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
        if(turnO == true) {
            grid.innerText = "O";
            turnO = false;
        }
        else {
            grid.innerText = "X";
            turnO = true;
        }
        grid.disabled = true;
        checkWinner();
    });
});

// Checking Winner funcitonality
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = grids[pattern[0]].innerText;
        let pos2Val = grids[pattern[1]].innerText;
        let pos3Val = grids[pattern[2]].innerText;
        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
            }
            grids.disabled = true;
        }
    }
}