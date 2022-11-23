// TODO: Click event listener on each box in the AI's board which will trigger attack function

function gameboardGrids() {
    const gameBoardDiv = document.querySelectorAll('.gameBoard');

    // 10x10 grid
    gameBoardDiv.forEach(board => {

        // Rows
        for(let i = 0; i < 10; i++) {

            // Create a div for the rows
            const row = document.createElement('div');
    
            // Append to gameBoard Div
            board.appendChild(row);

            // Columns
            for(let j = 9; j >= 0; j--) {

                // Create a div for the columns
                const col = document.createElement('div');
                col.classList = 'gameBoardBox';
                // Add column number to create coordinates for each box
                col.setAttribute('id', `${i}, ${j}`)
                row.id.concat(`, ${j}`);
        
                // Append to gameBoard Div
                row.appendChild(col);
            }
        }

    })
}

export {
    gameboardGrids,
}