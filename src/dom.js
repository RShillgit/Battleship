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

function eventHandler(e) {
    //console.log(e.target);
    // Ships Button
    if (e.target.innerHTML === 'Ships') return shipsScreen();

    // Vessels
    if (e.currentTarget.className.includes('vessel')) return shipSelect(e);
}

function shipsScreen() {
    
    // Toggle shipsContainer's display
    const shipsContainer = document.querySelector('.shipsContainer');
    shipsContainer.classList.toggle('Active');

    // Add event listener to each vessel
    const vessels = document.querySelectorAll('.vessel');

    // User Board Boxes
    const userBoardBoxes = document.getElementById('usersGameboard').querySelectorAll('.gameBoardBox');
    
    vessels.forEach(vessel => {

        // Array to hold the coordinates hovered over, that way we can pick the last coordinate to place the ship
        let coords = [];

        // Drag start event
        vessel.addEventListener('dragstart', (e) => {

            // Add a hover event to the user board boxes
            userBoardBoxes.forEach(userBox => {
                
                userBox.addEventListener('dragenter', (e) => {
                    e.preventDefault();

                    // Push coordinate to array
                    coords.push(e.target.id);
                    console.log(coords);
                })
                userBox.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.target.style.backgroundColor = 'red';
                })
            });
        });

        vessel.addEventListener('dragend', (e) => {
            console.log(coords);
        })

    });
}

function shipSelect(e) {


}

function shipDrag(e) {

    
    e.dataTransfer.setData('text', e.target.id);
}

export {
    gameboardGrids,
    eventHandler,
}