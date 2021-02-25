/*----- constants -----*/

const board = document.querySelector(".grid-container");
let spaces = document.querySelectorAll(".grid-item");
const newGameBtn = document.querySelector('#new-game');
const newRoundBtn = document.querySelector('#new-round');
let player = document.querySelector(".player");
const winningArray = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 7, 25, 33],
    [8, 16, 24, 32],
    [11, 7, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
];


/*----- app's state (variables) -----*/

let currentPlayer;
const players = {
    '1': {
        name: 'Player One',
        moves: 0,
        num: 1
        
    },
    '-1': {
        name: 'Player Two',
        moves: 0,
        num: -1
        
    } 
};

/*----- cached element references -----*/

let grid = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]; //what spaces are taken by which player


/*----- event listeners -----*/


/*----- functions -----*/

function initialize(){  
    let spaces = document.querySelector(".grid-container");
    spaces.addEventListener('click', spaceClicked)
    
    newGameBtn.addEventListener("click",function reset(){
        currentPlayer = players[1].name;
        player.innerHTML=currentPlayer
        players[1].moves = 0;
        players[-1].moves = 0;
        document.getElementById("p1-moves").innerHTML = players[1].moves;
        document.getElementById("p2-moves").innerHTML = players[-1].moves;

        grid = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        console.log('initializing state...');
    }) 
}

initialize();


function render(){
    let rows = document.querySelectorAll("[row]");
    let columns =document.querySelectorAll("[column]");

    // console.log(rows)
    // console.log(columns)
    
    grid.forEach(function (rows, i){
        rows.forEach(function (columns, j){
            if(grid[i][j] == 1) {
                let idx = i * 7 + j;
                document.getElementById(`${idx}`).style.backgroundColor = 'crimson';
            } else if (grid[i][j] == -1) {
                let idx = i * 7 + j 
                document.getElementById(`${idx}`).style.backgroundColor = 'yellow';
            }
        })
    })
    
}


function spaceClicked(e){
    if (e.target.className !== 'grid-item') {
        return 
    }
    console.log('this is e ', e.target)  
    
    let click = parseInt(e.target.id);
    let bottomSpace = click % 7 + 35;
    let secondSpace = click % 7 + 28;
    let thirdSpace = click % 7 + 21;
    let fourthSpace = click % 7 + 14;
    let fifthSpace = click % 7 + 7;
    let topSpace = click % 7;

    
    
    if (grid[Math.floor(bottomSpace / 7)][bottomSpace % 7] == 0){
        grid[Math.floor(bottomSpace / 7)][bottomSpace % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(grid[Math.floor(secondSpace / 7)][secondSpace % 7] == 0){
        grid[Math.floor(secondSpace / 7)][secondSpace % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(grid[Math.floor(thirdSpace / 7)][thirdSpace % 7] == 0){
        grid[Math.floor(thirdSpace / 7)][thirdSpace % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(grid[Math.floor(fourthSpace / 7)][fourthSpace % 7] == 0){
        grid[Math.floor(fourthSpace / 7)][fourthSpace % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(grid[Math.floor(fifthSpace / 7)][fifthSpace % 7] == 0){
        grid[Math.floor(fifthSpace / 7)][fifthSpace % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(grid[Math.floor(topSpace / 7)][topSpace % 7] == 0){
        grid[Math.floor(topSpace / 7)][topSpace % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else {
        alert('SELECTION NOT VALID')
    }
    console.log(grid)

    if(currentPlayer === players[1].name){
        currentPlayer = players[-1].name;
        player.innerHTML = currentPlayer;
        

        // checkWin();
    } else if (currentPlayer === players[-1].name){
        currentPlayer = players[1].name;
        player.innerHTML = currentPlayer;
        
        // checkWin();
    }

    render();
}