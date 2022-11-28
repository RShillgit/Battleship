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

    // Ships Button
    if (e.target.innerHTML === 'Ships') return shipsScreen(e);

    // Rotate Button
    if (e.target.id === 'rotateBtn') return shipsScreen(e);

    // Clear Placement
    if (e.currentTarget.id === 'clearPlacement') return clearShips();

    // Confirm Placement
    if (e.currentTarget.id === 'confirmPlacement') return postConfirmPlacement();
}

function shipsScreen(e) {

    const shipsContainer = document.querySelector('.shipsContainer');

    // If the rotate button was clicked
    if(e.target.id === 'rotateBtn') {

        // Rotate content div
        const shipContent = document.querySelector('.vesselContainer');
        shipContent.classList.toggle('rotated');

        // Rotate ships
        const vesselDivs = document.querySelectorAll('.vessel');
        vesselDivs.forEach(vesselDiv => vesselDiv.classList.toggle('vertical'));

        // Toggle shipsContainer's display
        shipsContainer.classList.toggle('Active');
    }

    // Toggle shipsContainer's display
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

            // send vessel, and coordinates to ship select function
            shipSelect(placementCoord, draggedVessel);
        })
    });
    return placementCoord;
}

function shipSelect(coord, vessel) {

    // Get the dragged vessel to see if it is horizontal or vertical
    const vesselDragged = document.getElementById(vessel)

    // Vessel names and lengths
    const vesselStats = {
        'carrier': 5,
        'battleship': 4,
        'cruiser': 3,
        'submarine': 3,
        'destroyer': 2,
    };

    let shipCoords = [];

    // Get the length of the vessel
    const vesselLength = vesselStats[vessel];

    // Change coords to numbers
    const splitCoords = coord.split(',');
    const xCoord = Number(splitCoords[0]);
    const yCoord = Number(splitCoords[1]);

    // Place the ship
    for (let i = 0; i < vesselLength; i++) {

        let shipBoxes;

        if (vesselDragged.classList.value.includes('vertical')) shipBoxes = document.getElementById(`${xCoord}, ${yCoord - i}`);
        if (!vesselDragged.classList.value.includes('vertical')) shipBoxes = document.getElementById(`${xCoord + i}, ${yCoord}`);
       

        // Error handling if the ship coordinate overlaps an already placed ship
        if (shipBoxes.classList.contains('placed')) return;

        // Error handling if ship goes off the board
        if (shipBoxes === null) return;

        shipCoords.push(shipBoxes);
    }
    // Change color, class, and data attribute of boxes where ship is placed
    shipCoords.forEach(shipCoord => {
        shipCoord.setAttribute('data-vessel', vessel);
        shipCoord.classList.toggle('placed');

        // Add the direction to the box class
        if(vesselDragged.classList.value.includes('vertical')) shipCoord.classList.toggle('vertical');
        else shipCoord.classList.toggle('horizontal');
    });

    // Change color and class of dragged ship and disable draggability
    const selectedVessel = document.getElementById(vessel);
    selectedVessel.classList.toggle('deployed');
    selectedVessel.draggable = false;

    allShipsPlaced();
}

// Checks if all ships have been placed, once they have it renders a confirm placement button
function allShipsPlaced() {
    // Get deployed vessels in a variable
    const deployedVessels = document.querySelectorAll('.vessel.deployed');

    if (deployedVessels.length === 5) {

        // Display confirm button
        const confirmPlacement = document.getElementById('confirmPlacement');
        confirmPlacement.style.display = 'flex';

        // Display clear button
        const clearPlacement = document.getElementById('clearPlacement');
        clearPlacement.style.display = 'flex';
    }
}

function postConfirmPlacement() {

    // Close the ships container
    const activeShipsContainer = document.querySelector('.shipsContainer');
    activeShipsContainer.classList.toggle('Active');
}

function renderAttacks(player) {

    // AI Board Boxes
    const aiBoardBoxes = document.getElementById('aisGameboard').querySelectorAll('.gameBoardBox');

    // Attack and misses arrays
    const attackCoords = player.attacks;
    const attackMisses = player.enemy.gameboard.misses;

    const attackCoordStrings = [];
    const attackMissStrings = [];

    // Attack and misses arrays as string coordinates
    attackCoords.forEach(coord => attackCoordStrings.push(`${coord[0]}, ${coord[1]}`));
    attackMisses.forEach(miss => attackMissStrings.push(`${miss[0]}, ${miss[1]}`));

    // Hits
    let hits = attackCoordStrings.filter(x => !attackMissStrings.includes(x));

    // Set boxes hit to red
    hits.forEach(hit => {

        // AI gameboard
        if(player.player === 1) {
            aiBoardBoxes.forEach(box => {
                if (box.id === hit)box.style.backgroundColor = 'red';
            })
        }
        // User gameboard
        else if (player.player === 2) {
            const boxHit = document.getElementById(hit);
            boxHit.style.backgroundColor = 'red';
        }
    });

    // Set boxes missed to gray
    attackMissStrings.forEach(miss => {
        // Ai gameboard
        if (player.player === 1) {
            aiBoardBoxes.forEach(box => {
                if (box.id === miss) box.style.backgroundColor = 'gray';
            })
        }
        // User gameboard
        else if (player.player === 2) {
            const allMisses = document.getElementById(miss);
            allMisses.style.backgroundColor = 'gray';
        }
    });
}

function displayWinner(playerId) {

    // Container
    const gameContainer = document.querySelector('.gameboardsContainer');

    // Winner Message Div
    const winnerMessageDiv = document.createElement('div');
    winnerMessageDiv.classList = 'winnerScreen';

    // Winner Message
    const winnerPlayer = document.createElement('p');
    if (playerId === 1) winnerPlayer.innerHTML = 'You Won!';
    else winnerPlayer.innerHTML = 'You Lost!';
    
    // Play Again Button
    const playAgainBtn = document.createElement('button');
    playAgainBtn.setAttribute('id', 'playAgain');
    playAgainBtn.innerHTML = 'Play Again';

    winnerMessageDiv.appendChild(winnerPlayer);
    winnerMessageDiv.appendChild(playAgainBtn);
    gameContainer.appendChild(winnerMessageDiv);
}

function clearShips() {

    const vesselData = document.querySelectorAll('[data-vessel]');
    vesselData.forEach(vData => vData.removeAttribute('data-vessel'));

    // Removed placed class from all placed ships
    const placedShips = document.querySelectorAll('.gameBoardBox.placed');

    placedShips.forEach(placedShip => {
        placedShip.classList = 'gameBoardBox';

    })

    // Remove deployed class from all vessels
    const allDeployedVessels = document.querySelectorAll('.vessel.deployed');
    allDeployedVessels.forEach(deployedVessel => {
        deployedVessel.classList.toggle('deployed');
    })

    const allVessels = document.querySelectorAll('.vessel');
    allVessels.forEach(v => v.draggable = true);
}

export {
    gameboardGrids,
    eventHandler,
    renderAttacks,
    displayWinner,
}