let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game-btn");
let resetBtn = document.querySelector("#reset");
let winPara = document.querySelector("#win-msg");
let msgcontainer = document.querySelector(".msg-container"); 

let turnO = true;
let count = 0;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

const resetGame=()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerHTML = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        checkdraw();
    })
});

const checkdraw=() =>{
    if(count === 9)
    {
        winPara.innerText = `Game Draw`;
        msgcontainer.classList.remove("hide");
    }
}

const disableBoxes=() =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
} 

const enableBoxes=() =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
} 

const showWinner = (winner) =>{
   winPara.innerText = `Congratulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disableBoxes();
}



const checkWinner = () => {
    for (let pattern of winPattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != "")
        {
            if(position1 === position2 && position2 === position3)
            {
                showWinner(position1);
            }
        }

    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);