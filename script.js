console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audio_turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// function to change turn
const changeTurn = () =>{
    return turn === "X"?"0": "X"
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" ) ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img').style.width = "56px"
        }
    })
}

// game logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(element.innerText == ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audio_turn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// let resetgame = document.getElementById("reset");
// resetgame.onclick(reload);