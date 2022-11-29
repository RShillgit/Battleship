import './style.css';
import Ship from './ship';
import Player from './player';
import { gameboardGrids, eventHandler, renderAttacks, displayWinner} from './dom';

// Create main game loop
function game() {
    
    // Ships button event listener
    const shipsButton = document.getElementById('shipsBtn');
    shipsButton.addEventListener('click', (e) => eventHandler(e));

    // Rotate ships event listener
    const rotateShips = document.getElementById('rotateBtn');
    rotateShips.addEventListener('click', (e) => {
        eventHandler(e)
    });

    // Make User and Ai boards
    gameboardGrids();

    // Create User
    const user = Player(1);
    user.createBoard();
    user.switchTurn();

    // Create Ai
    const ai = Player(2);
    ai.createBoard();

    // Make Eachother enemies
    user.createEnemy(ai);
    ai.createEnemy(user);

    // Clear ship placement button event listener
    const clearPlacement = document.getElementById('clearPlacement');
    clearPlacement.addEventListener('click', (e) => eventHandler(e));

    // Confirm ship placement button event listener
    const confirmPlacementBtn = document.getElementById('confirmPlacement');
    confirmPlacementBtn.addEventListener('click', (e) => {

        eventHandler(e);
        placeShips(user);

        // Add event listener to AI board
        const aisBoard = document.getElementById('aisGameboard');
        aisBoard.addEventListener('click', (e) => {

            eventHandler(e);

            attack(user, e);
        });
    })

    // Randomly place ai's ships
    placeAiShips(ai);
}
game();

function placeShips(user) {

    // Remove ships button event listener
    const buttonShips = document.getElementById('shipsBtn');
    buttonShips.setAttribute('disabled', true);
    buttonShips.style.display = 'none';

    // Get the first coordinate for each placed vessel
    const placedCarrier = document.querySelector('[data-vessel = "carrier"]');
    const placedBattleship = document.querySelector('[data-vessel = "battleship"]');
    const placedCruiser = document.querySelector('[data-vessel = "cruiser"]');
    const placedSubmarine = document.querySelector('[data-vessel = "submarine"]');
    const placedDestroyer = document.querySelector('[data-vessel = "destroyer"]');

    // Convert coordinates to numbers
    // Carrier
    const convertedCarrierCoord = placedCarrier.id.split(',')
    const carrierStartCoord = [Number(convertedCarrierCoord[0]), Number(convertedCarrierCoord[1])];
    // Battleship
    const convertedBattleshipCoord = placedBattleship.id.split(',')
    const battleshipStartCoord = [Number(convertedBattleshipCoord[0]), Number(convertedBattleshipCoord[1])];
    // Cruiser
    const convertedCruiserCoord = placedCruiser.id.split(',')
    const cruiserStartCoord = [Number(convertedCruiserCoord[0]), Number(convertedCruiserCoord[1])];
    // Submarine
    const convertedSubmarineCoord = placedSubmarine.id.split(',')
    const submarineStartCoord = [Number(convertedSubmarineCoord[0]), Number(convertedSubmarineCoord[1])];
    // Destroyer
    const convertedDestroyerCoord = placedDestroyer.id.split(',')
    const destroyerStartCoord = [Number(convertedDestroyerCoord[0]), Number(convertedDestroyerCoord[1])];

    // Create the ships
    const userCarrier = Ship(5); // Carrier
    const userBattleship = Ship(4); // Battleship
    const userCruiser = Ship(3); // Cruiser
    const userSubmarine = Ship(3); // Submarine
    const userDestroyer = Ship(2); // Destroyer

    // Rotate ships if needed
    if (placedCarrier.classList.value.includes('vertical')) userCarrier.rotate();
    if (placedBattleship.classList.value.includes('vertical')) userBattleship.rotate();
    if (placedCruiser.classList.value.includes('vertical')) userCruiser.rotate();
    if (placedSubmarine.classList.value.includes('vertical')) userSubmarine.rotate();
    if (placedDestroyer.classList.value.includes('vertical')) userDestroyer.rotate();

    // Place Ships
    user.gameboard.placeShip(userCarrier, carrierStartCoord);
    user.gameboard.placeShip(userBattleship, battleshipStartCoord);
    user.gameboard.placeShip(userCruiser, cruiserStartCoord);
    user.gameboard.placeShip(userSubmarine, submarineStartCoord);
    user.gameboard.placeShip(userDestroyer, destroyerStartCoord);
}

function randomShipCoord(vessel) {

    const name = vessel;

    // Get a random Direction
    const possibleDirections = ['horizontal', 'vertical'];
    const randomNumbers = [0, 1];

    const randomDirectionChoice = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];

    const direction = possibleDirections[randomDirectionChoice];

    // Initialize variables
    let xCoords;
    let yCoords;
    let randomX;
    let randomY;
    let randomCoordinate;

    // Horizontal
    if (direction === 'horizontal') {
        if (vessel === 'carrier') xCoords = [0, 1, 2, 3, 4];
        else if (vessel === 'battleship') xCoords = [0, 1, 2, 3, 4, 5];
        else if (vessel === 'cruiser') xCoords = [0, 1, 2, 3, 4, 5, 6];
        else if (vessel === 'submarine') xCoords = [0, 1, 2, 3, 4, 5, 6];
        else if (vessel === 'destroyer') xCoords = [0, 1, 2, 3, 4, 5, 6, 7];  

        yCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        randomX = xCoords[Math.floor(Math.random()*xCoords.length)];
        randomY = yCoords[Math.floor(Math.random()*yCoords.length)];

        // Create random coordinate from random x and y values
        randomCoordinate = [randomX, randomY];
        return {randomCoordinate, direction, name};
    }
    // Vertical
    else {
        if (vessel === 'carrier') yCoords = [9, 8, 7, 6, 5];
        else if (vessel === 'battleship') yCoords = [9, 8, 7, 6, 5, 4];
        else if (vessel === 'cruiser') yCoords = [9, 8, 7, 6, 5, 4, 3];
        else if (vessel === 'submarine') yCoords = [9, 8, 7, 6, 5, 4, 3];
        else if (vessel === 'destroyer') yCoords = [9, 8, 7, 6, 5, 4, 3, 2]; 

        xCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        randomX = xCoords[Math.floor(Math.random()*xCoords.length)];
        randomY = yCoords[Math.floor(Math.random()*yCoords.length)];

        // Create random coordinate from random x and y values
        randomCoordinate = [randomX, randomY];
        return {randomCoordinate, direction, name};
    }
}

function placeAiShips(ai) {
    // Array that will hold all the occupied coordinates so there cant be overlap
    let occupiedCoords = [];

    const vesselLengths = {
        'carrier': 5,
        'battleship': 4,
        'cruiser': 3,
        'submarine': 3,
        'destroyer': 2,
    }

    const carrier = randomShipCoord('carrier');
    const battleship = randomShipCoord('battleship');
    const cruiser = randomShipCoord('cruiser');
    const submarine = randomShipCoord('submarine');
    const destroyer = randomShipCoord('destroyer');

    let randomVessels = [carrier, battleship, cruiser, submarine, destroyer];

    randomVessels.forEach(vessel => {

        
        for(let i = 0; i < vesselLengths[vessel.name]; i++) {

            let newCoord;

            if (vessel.direction === 'horizontal') {
                newCoord = `${vessel.randomCoordinate[0] + i}, ${vessel.randomCoordinate[1]}`

                //occupiedCoords.push(newCoord);
            }
            else if (vessel.direction === 'vertical') {
                //vesselCoords.push([vessel.randomCoordinate[0], vessel.randomCoordinate[1] - i]);
                newCoord = `${vessel.randomCoordinate[0]}, ${vessel.randomCoordinate[1] - i}`;
                
                //occupiedCoords.push(newCoord);
            }
            occupiedCoords.push(newCoord);
        }
    })
    // If the coordinate is already occupied, rerun the function to get new coordinates
    if (occupiedCoords.length !== new Set(occupiedCoords).size) {

        // AI BOARD BOXES THAT CAN BE DELETED LATER AS WELL
        const aiBoardBoxes = document.getElementById('aisGameboard').querySelectorAll('.gameBoardBox');
        aiBoardBoxes.forEach(box => box.style.backgroundColor = 'white');

        return placeAiShips(ai);
    }

    // Actually create the ships
    // Carrier
    const aiCarrier = Ship(5);
    aiCarrier.direction = carrier.direction;
    ai.gameboard.placeShip(aiCarrier, carrier.randomCoordinate);

    // Battleship
    const aiBattleship = Ship(4);
    aiBattleship.direction = battleship.direction;
    ai.gameboard.placeShip(aiBattleship, battleship.randomCoordinate);

    // Cruiser
    const aiCruiser = Ship(3);
    aiCruiser.direction = cruiser.direction;
    ai.gameboard.placeShip(aiCruiser, cruiser.randomCoordinate);

    // Submarine
    const aiSubmarine = Ship(3);
    aiSubmarine.direction = submarine.direction;
    ai.gameboard.placeShip(aiSubmarine, submarine.randomCoordinate);

    // Destroyer
    const aiDestroyer = Ship(2);
    aiDestroyer.direction = destroyer.direction;
    ai.gameboard.placeShip(aiDestroyer, destroyer.randomCoordinate);
}

function attack(user, e) {
    if (user.gameboard.ships.length === 5 && user.gameboard.allSunk()) return displayWinner(2), replay();
    if (user.enemy.gameboard.ships.length === 5 && user.enemy.gameboard.allSunk()) return displayWinner(1), replay();
    else if (user.turn === true) attackAi(user, e);
    else if (user.turn === false) aiAttackUser(user);
}

function attackAi(user, e) {

    // Get each attack and save them to an array as strings
    let userAttacksArray = [];
    const userAttacks = user.attacks;
    userAttacks.forEach(att => userAttacksArray.push(`${att[0]}, ${att[1]}`));

    // If box has already been attacked return
    if (userAttacksArray.includes(e.target.id)) return;

    const splitId = e.target.id.split(',');
    const xAttack = Number(splitId[0]);
    const yAttack = Number(splitId[1]);

    user.attack([xAttack, yAttack]);

    // DOM
    renderAttacks(user);
    
    attack(user, e);
}

function aiAttackUser(user) {
    const ai = user.enemy;

    // Get ai attacks and misses
    const allAiAttacks = ai.attacks;
    const allAiMisses = user.gameboard.misses;

    const aiAttackCoords = [];
    const aiMissCoords = [];

    // Attack and misses arrays as string coordinates
    allAiAttacks.forEach(att => aiAttackCoords.push(`${att[0]}, ${att[1]}`));
    allAiMisses.forEach(miss => aiMissCoords.push(`${miss[0]}, ${miss[1]}`));

    // Hits
    let hits = aiAttackCoords.filter(x => !aiMissCoords.includes(x));

    // The box that the ai will attack
    let randomBox;

    /*
    // If there is a hit, attack randomly either left right above or below the hit
    if (hits.length > 0) {
        const mostRecentHit = hits.pop();

        // Intelligently attack the next box
        randomBox = intelligentAi(hits, hit);

    }
    */

    // if (hits.length < 1 || the ship is sunk) ...

    // Get each ai attack and save them to an array as strings
    let aiAttacksArray = [];
    const aiAttacks = ai.attacks;
    aiAttacks.forEach(att => aiAttacksArray.push(`${att[0]}, ${att[1]}`));

    // Get a random user board box to attack
    const userBoxes = document.getElementById('usersGameboard').querySelectorAll('.gameBoardBox');

    randomBox = userBoxes[Math.floor(Math.random()*userBoxes.length)];

    // If the random box has already been attacked, find another random box
    while (aiAttacksArray.includes(randomBox.id)) {
        randomBox = userBoxes[Math.floor(Math.random()*userBoxes.length)];
    }

    // End if

    const randomBoxSplit = randomBox.id.split(',');
    const randomUserX = Number(randomBoxSplit[0]);
    const randomUserY = Number(randomBoxSplit[1]);

    ai.attack([randomUserX, randomUserY]);

    // DOM
    renderAttacks(ai);
}

function intelligentAi(hits, hit) {

}

function replay() {

    // Play Again button event listener
    const replayBtn = document.getElementById('playAgain');
    replayBtn.addEventListener('click', () => {

        // reload page
        window.location.reload();
    });
}

