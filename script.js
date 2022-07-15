let matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(matrix);

const start = document.getElementById('btn-ctn-play');
const table = document.getElementById('box-ctn');
const playbutton = document.getElementById('play-btn');
const header = document.getElementById('header');
const score = document.getElementById('score');
const winDisplay = document.getElementById('win-display');
const backbtn = document.getElementById('back-btn');
const replaybtn = document.getElementById('replay-btn');
let teamwins = "";

function startgame() {
    start.style.display = "none";
    header.style.display = "none";
    table.style.display = "flex";
    score.style.display = "none";
}

let count = 0;
let checked = []
let found = false;
let finishgame = false;
function firebtn(event) {
    winner()
    if (finishgame) {
        scoreboard()
    }
    else if(!finishgame && checked.length===9){
        scoreboard()
        
    }
    let data = parseInt(event.target.id)

    checked.map((element) => {
        if (event.target.id === element) {

            found = true
        }
        else {
            found = false
        }
    })
    if (!found) {
        checked.push(event.target.id)

        count++
        if (count % 2 === 1) {
            if (data < 3) {
                matrix[0][data] = "O"
            }
            else if (data > 2 && data < 6) {
                matrix[1][data - 3] = "O"
            }
            else {
                matrix[2][data - 6] = "O"
            }
            event.target.innerHTML = "O"
            winner()
            if (finishgame) {
                scoreboard()
            }
            else if(!finishgame && checked.length===9){
                scoreboard()
                
            }
        }
        else {
            if (data < 3) {
                matrix[0][data] = ("X")
            }
            else if (data > 2 && data < 6) {
                matrix[1][data - 3] = "X"
            }
            else {
                matrix[2][data - 6] = "X"
            }
            event.target.innerHTML = "X"
            winner()
            if (finishgame) {
                scoreboard()
            }
            else if(!finishgame && checked.length===9){
                scoreboard()
                
            }
        }
    }

}

function winner() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
                teamwins = matrix[0][0]
                finishgame = true
            }
            else if (matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2]) {
                teamwins = matrix[0][0]
                finishgame = true
            }
            else if (matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][2]) {
                teamwins = matrix[1][0]
                finishgame = true
            }
            else if (matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2]) {
                teamwins = matrix[2][0]
                finishgame = true
            }
            else if (matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0]) {
                teamwins = matrix[0][0]
                finishgame = true
            } else if (matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1]) {
                teamwins = matrix[0][1]
                finishgame = true
            }
            else if (matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2]) {
                teamwins = matrix[0][2]
                finishgame = true
            }
            else if (matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
                teamwins = matrix[0][2]
                finishgame = true
            }
            //console.log(matrix[i][j]);
        }
    }
}

function scoreboard() {
    table.style.display = "none"
    score.style.display = "block"
    backbtn.style.display = "block"
    replaybtn.style.display = "block"
    winDisplay.innerHTML = (teamwins === "X") ? "Team X winner" :(teamwins === "O")?"Team O winner" : "Match Tie"
}

function goback() {
    location.reload()
}

function replay() {
    count = 0;
    checked = []
    found = false;
    finishgame = false;
    teamwins = "";
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    Array.from(document.getElementsByTagName('td')).map((element) => {
        element.innerHTML = ""
    })
    startgame()
}

const winCombos = [
    [00, 11, 22],
    [00, 01, 02],
    [10, 11, 12],
    [20, 21, 22],
    [00, 10, 20],
    [01, 11, 21],
    [02, 12, 22],
    [02, 11, 20]
    // Add more possible winCombos. Hint: There are total 8 win combos.
];

