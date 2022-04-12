
const gameElt = document.querySelector(".game");
const gameCells = gameElt.querySelectorAll("td");

const PLAYER1_SIGN = "x";
const PLAYER2_SIGN = "o";

// victory class to add :  ended winner-xo victory-000

let data = ["","","","","","","","",""];

let currentPlayer:"x"|"o" = "x";

let ended = false;

let playWithIA = false;

function nextPlayer(){
    if (currentPlayer==PLAYER1_SIGN)
        currentPlayer = PLAYER2_SIGN;
    else
        currentPlayer = PLAYER1_SIGN;

    if (playWithIA && currentPlayer==PLAYER2_SIGN){
        playIA();
    }
}

const victoryCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function victory(currentPlayer: "x" | "o", combination:string) {
    ended = true;
    gameElt.classList.add("ended","winner-"+currentPlayer, "victory-"+combination)
}

function checkVictoryConditions() {
    victoryCombinations.forEach(combination=>{
        if (data[combination[0]]==currentPlayer &&
            data[combination[1]]==currentPlayer &&
            data[combination[2]]==currentPlayer) {

            const combinationStr = combination.join("");
            victory(currentPlayer, combinationStr);
        }
    })
}

function playIA(){
    const emptyCellIdx = data.findIndex(d=>d=="");
    playCell(emptyCellIdx);
}

function playCell(index: number) {
    if (ended) return;

    const existingData = data[index];
    if (existingData != ""){
        return;
    }
    data[index] = currentPlayer;
    displayData();

    checkVictoryConditions();

    nextPlayer();
}

function addCellClicks(){
    gameCells.forEach((cellElt, index) => {
        cellElt.addEventListener("click",()=>{
            // on essaie de jouer le signe du joueur en cours dans la case
            playCell(index);
        })
    })
}

function displayData(){
    gameCells.forEach((cellElt, index) => {
        const sign = data[index];
        if (sign == PLAYER1_SIGN){
            cellElt.classList.add(PLAYER1_SIGN);
        }
        else if (sign == PLAYER2_SIGN){
            cellElt.classList.add(PLAYER2_SIGN);
        }
        else {
            cellElt.className = "";
        }
    })
}

function onAppStart() {
    addCellClicks();
}

function restart() {
    ended = false;
    currentPlayer = PLAYER1_SIGN;
    gameElt.className = "game";
    gameCells.forEach(cell=>{
        cell.innerHTML = "";
        cell.className = "";
    })
    data = data.map(d=>"");
}

document.querySelector("#restart-btn").addEventListener("click",()=>{
    restart()
})
document.querySelector("#restart-ia-btn").addEventListener("click",()=>{
    playWithIA = true;
    restart()
})

onAppStart();
