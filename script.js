// const gameBoard = (() => {
//     // Creates players
//     const playerFactory = (name, mark, ai, turn) => {
//         return { name, mark, ai, turn };
//     };

//     const player1 = playerFactory('player 1', 'X', false, true);
//     const player2 = playerFactory('Player 2', 'O', false, false);

//     // Possible win combinations
//     const winCombos = [
//         [0,1,2],
//         [0,3,6],
//         [3,4,5],
//         [6,7,8],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//         // Add more possible winCombos. Hint: There are total 8 win combos.
//     ];



//     let winner = null;
//     console.log();
//     // Turn counter
//     let turns = 0;

//     // Board array
//     let board = [];

//     // Winner combination array
//     let winnerCombo = [];

//     // Function when making a move
//     const playerTurn = (function () {
//         const box = document.querySelectorAll('.box');
//         box.forEach( box => {
//             box.addEventListener('click', e => {
//                 // X player move if conditions are met
//                 if (player1.turn == true && gameBoard.winner == null
//                     && e.target.textContent == '') {
//                     // Adds move to array

//                     // Board styling

//                     // Sets player turns


//                     console.log(board)
//                 // O player move if conditions are met   
//                 } else if (player2.turn == true && gameBoard.winner == null
//                     && e.target.textContent == '' && player2.ai == false) {
//                     // Adds move to array    

//                     // Board styling

//                     // Sets player turns


//                     console.log(board)
//                 } else {
//                     return;
//                 };

//                 winCheck();

//                 // Fade effect using opacity
//                 box.style.opacity = '1';  
//             });
//         });
//         return { box }
//     })();



//     // Checks for a winner
//     winCheck = () => {
//         turns++;

//         // Seperates each player X | O move into 2 diffrent arrays

//         // Loop iterates over each winCombo array 

//         // Display the winner

//     };


//     //**************************Don't make any changes below. The functions below are complete */


//     // Resets board and display
// //     gameReset = () => {
// //         gameBoard.winner = null;
// //         gameBoard.winnerCombo = undefined;
// //         player1.turn = true;
// //         player2.turn = false;
// //         player2.ai = false;
// //         turns = 0;
// //         board.splice(0, board.length);
// //         console.log(board, winner, player1.turn, player2.turn)
// //     };
// //     console.log(board, winner, player1.turn, player2.turn)

// //     return { winCheck, gameReset, playerTurn, board, player2, winnerCombo };
//  })();

// // Controls the display
// const displayController = (() => {
//     const boxCtn = document.querySelector('.box-ctn');
//     const box = document.querySelectorAll('.box');
//     const winCtn = document.querySelector('.win-display');
//     // Display winner function 
//     winDisplay = () => {
//         // Displays the win combo
//         combDisplay = () => {
//             for(i = 0; i < gameBoard.winnerCombo.length; i++) {
//                 document.getElementById(gameBoard.winnerCombo[i]).style.
//                   backgroundColor = 'rgba(0, 0, 0, 0.040)';
//             };
//         };    
//         // Displays the winner
//         if(gameBoard.winner === 'p1') {
//             winCtn.textContent = 'X Wins the round!';
//             combDisplay();

//         } else if (gameBoard.winner === 'p2') {
//             winCtn.textContent = 'O Wins the round!';
//             combDisplay();

//         } else if (gameBoard.winner === 'tie') {
//             winCtn.textContent = 'It\'s a tie!';

//         } else {
//             return;
//         };

//         replayBtn.style.display = 'flex';
//         backBtn.style.display = 'flex';
//         console.log(gameBoard.winnerCombo)
//     };
//     // Board render 
//     gamePlay = () => {
//         winCtn.style.display = 'block';

//         header.style.display = 'none';

//         playBtn.style.display = 'none';

//         // playBtnAi.style.display = 'none';

//         boxCtn.style.display = 'flex';

//         backBtn.style.display = 'flex';
//     };



//     // Resets board and display
//     gameReplay = () => {
//        // gameBoard.gameReset();

//         box.forEach( box => {
//             box.textContent = '';
//             box.style.opacity = '0';
//             box.style.backgroundColor = 'white';
//         });

//         replayBtn.style.display = 'none';

//         winCtn.textContent = '';
//     };

//     // Back to main button 
//     mainPage = () => {
//         // styling
//         boxCtn.style.display = 'none';

//         winCtn.style.display = 'none';

//         backBtn.style.display = 'none';

//       //  playBtnAi.style.display = 'flex';

//         playBtn.style.display = 'flex';

//         header.style.display = 'flex';
//         // Resets board and display  
//         gameReplay();
//     };



//     // Event listeners 
//     const playBtn = document.getElementById('play-btn');
//     playBtn.addEventListener('click', gamePlay);

//     const replayBtn = document.querySelector('.replay-btn');
//     replayBtn.addEventListener('click', gameReplay);

//     const backBtn = document.querySelector('.back-btn');
//     backBtn.addEventListener('click', mainPage);

//     const header = document.querySelector('header');

//     return { winDisplay, gamePlay }
// })();
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

