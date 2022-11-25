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
    // if (e.currentTarget.className.includes('vessel')) return shipDrag(e);
}

function shipsScreen() {
    
    // Toggle shipsContainer's display
    const shipsContainer = document.querySelector('.shipsContainer');
    shipsContainer.classList.toggle('Active');
    
    // Initialize coordinate where ship is placed
    let placementCoord;

    // Initialize vessel dragged
    let draggedVessel;

    // Add event listener to each vessel
    const vessels = document.querySelectorAll('.vessel');

    // User Board Boxes
    const userBoardBoxes = document.getElementById('usersGameboard').querySelectorAll('.gameBoardBox');
    
    vessels.forEach(vessel => {

        // Array to hold the coordinates hovered over, that way we can pick the last coordinate to place the ship
        let coords = [];

        // Drag start event
        vessel.addEventListener('dragstart', (e) => {

            draggedVessel = e.target.id;

            // Add a hover event to the user board boxes
            userBoardBoxes.forEach(userBox => {
                
                userBox.addEventListener('dragenter', (e) => {
                    e.preventDefault();

                    // Push coordinate to array
                    coords.push(e.target.id);
                })
            });
        });

        // When drag ends, save the final coordinate in a variable
        vessel.addEventListener('dragend', () => {
            placementCoord = coords.pop();

            // send vessel and coordinates to ship select function
            shipSelect(placementCoord, draggedVessel);
        })
    });
    return placementCoord;
}

function shipSelect(coord, vessel) {
    console.log(coord);

    // Vessel names and lengths
    const vesselStats = {
        'carrier': 5,
        'battleship': 4,
        'cruiser': 3,
        'submarine': 3,
        'destroyer': 2,
    };

    // Get the length of the vessel
    const vesselLength = vesselStats[vessel];

    // Change coords to numbers
    const splitCoords = coord.split(',');
    const xCoord = Number(splitCoords[0]);
    const yCoord = Number(splitCoords[1]);

    // Try to place the ship
    for (let i = 0; i < vesselLength; i++) {

        const shipBoxes = document.getElementById(`${xCoord + i}, ${yCoord}`);

        // Error handling if ship goes off the board
        if (shipBoxes === null) return;

        // Change shipBoxes background color
        shipBoxes.style.backgroundColor = 'lightgray';

        console.log(shipBoxes);
    }
    // Change color of dragged ship and disable draggability
    const selectedVessel = document.getElementById(vessel);
    selectedVessel.style.backgroundColor = 'green';
    selectedVessel.draggable = false;
}



export {
    gameboardGrids,
    eventHandler,
}