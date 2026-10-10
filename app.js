let boxes = document.querySelectorAll(".box");

let resetButton = document.querySelector("#reset-button");
let newGameButton = document.querySelector("#new-game-button");

let messageContainer = document.querySelector(".msg-container");
let messageElement = document.querySelector("#message");


// Player 1 ki turn
let turnO = true;


// Winning Positions
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


// ==========================
// BOX CLICK
// ==========================

boxes.forEach((box) => {

    box.addEventListener("click", function () {

        // Player 1 - O
        if (turnO === true) {

            box.innerText = "O";

            turnO = false;
        }

        // Player 2 - X
        else {

            box.innerText = "X";

            turnO = true;
        }


        // Clicked box ko disable karo
        box.disabled = true;


        // Check karo winner bana ya nahi
        checkWinner();

    });

});


// ==========================
// CHECK WINNER
// ==========================

function checkWinner() {

    for (let pattern of winPatterns) {

        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;


        // Agar teenon same aur empty nahi hain
        if (
            position1 !== "" &&
            position1 === position2 &&
            position2 === position3
        ) {

            showWinner(position1);

            return;
        }
    }


    // Agar winner nahi bana
    // aur saare boxes fill ho gaye
    let allFilled = true;

    boxes.forEach((box) => {

        if (box.innerText === "") {
            allFilled = false;
        }

    });


    if (allFilled === true) {

        showDraw();

    }

}


// ==========================
// SHOW WINNER
// ==========================

function showWinner(winner) {

    messageContainer.classList.remove("hidden");

    messageElement.innerText =
        "Congratulations! Winner is: " + winner;


    // Game stop
    boxes.forEach((box) => {

        box.disabled = true;

    });

}


// ==========================
// DRAW
// ==========================

function showDraw() {

    messageContainer.classList.remove("hidden");

    messageElement.innerText =
        "Game Draw!";


    boxes.forEach((box) => {

        box.disabled = true;

    });

}


// ==========================
// RESET GAME
// ==========================

function resetGame() {

    // Player 1 se start
    turnO = true;


    // Winner message hide
    messageContainer.classList.add("hidden");


    // Saare boxes clear
    boxes.forEach((box) => {

        box.innerText = "";

        box.disabled = false;

    });

}


// ==========================
// RESET BUTTON
// ==========================

resetButton.addEventListener("click", function () {

    resetGame();

});


// ==========================
// NEW GAME BUTTON
// ==========================

newGameButton.addEventListener("click", function () {

    resetGame();

});