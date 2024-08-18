let boxes = document.querySelectorAll(".box");
reseBtn = document.querySelector("#reset-btn");
let message = document.querySelector("h2");
let newGameBtn = document.querySelector("#new-game-btn");



message.innerHTML = "";

let turn = true;   ///user turn either x or o;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    turn = true;
    enableBoxes();
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        message.innerHTML = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn) {  ///turn for player X
            box.innerHTML = "X";
            box.style.color = "red";
            turn = false
        }
        else {         /////turn of player O
            box.innerHTML = "O";
            box.style.color = "blue"
            turn = true;
        }
        box.disabled = true;
        cheakWinner();
    });
});


const dissableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    message.innerHTML = `The Winner is ${winner}`;
    dissableBoxes();
}



cheakWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);

            }
        }
    }
}

newGameBtn.addEventListener("click", () => {
    enableBoxes();
});
reseBtn.addEventListener("click", () => {
    enableBoxes();
})