/*----- constants -----*/

const board = document.querySelector(".grid-container");

const newGameBtn = document.querySelector('#new-game');

let player = document.querySelector(".player");



/*----- app's state (variables) -----*/

let currentPlayer;
const players = {
    '1': {
        name: 'Player One',
        num: 1
        
    },
    '-1': {
        name: 'Player Two',
        num: -1
        
    } 
};

let winner;
/*----- cached element references -----*/
let grid = 
   [[0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]];

currentPlayer = players[1].name;

/*----- event listeners -----*/

let spaces = document.querySelector(".grid-container");
spaces.addEventListener('click', spaceClicked);
newGameBtn.addEventListener("click", newGame);

/*----- functions -----*/


function initialize(){  
    currentPlayer = players[1].name;
    player.innerHTML=currentPlayer;
    
    
    grid = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ];
    winner = null;
    
    render();
    };

    

initialize();

function render(){
    let rows = document.querySelectorAll("[row]");
    let columns =document.querySelectorAll("[column]");

    
    
    grid.forEach(function (rows, i){
        rows.forEach(function (columns, j){
            if(grid[i][j] == 1) {
                let idx = i * 7 + j;
                document.getElementById(`${idx}`).style.backgroundColor = 'crimson';
            } else if (grid[i][j] == -1) {
                let idx = i * 7 + j 
                document.getElementById(`${idx}`).style.backgroundColor = 'yellow';
            } else if(grid[i][j] == 0) {
                let idx = i * 7 + j
                document.getElementById(`${idx}`).style.backgroundColor = '#caf0f8';
            }
        })
    })
    
}

function newGame(){
    initialize();

}
function spaceClicked(e){
    if (e.target.className !== 'grid-item') {
        return 
    }
    
    let row = parseInt(e.target.dataset.row);
    let column = parseInt(e.target.dataset.column);
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
    
    if(currentPlayer === players[1].name){
        currentPlayer = players[-1].name;
        player.innerHTML = currentPlayer;
        ;
        

        
    } else if (currentPlayer === players[-1].name){
        currentPlayer = players[1].name;
        player.innerHTML = currentPlayer;
        
        
};

    render();
    
    winner = checkWin(grid)
       if (winner == 1 || winner == -1) {
    
           player.innerHTML = 'You Have Won!';
       }
    };
//winning logic

function checkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}

function checkWin(bd) {
    // Check down
    for (r = 0; r < 3; r++)
        for (c = 0; c < 7; c++)
            if (checkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (r = 0; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return 0;
}






    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



















