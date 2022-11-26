import _ from 'lodash';
import './style.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import { gameboardGrids, eventHandler } from './dom';

// Create main game loop
function game() {

    // Ships button event listener
    const shipsButton = document.getElementById('shipsBtn');
    shipsButton.addEventListener('click', (e) => eventHandler(e));

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

    // Check if all ships are placed
    // Confirm button after you place ships that then actually places the ships on the gameboard
    // On confirm click, send it to the function that places the ships AND send it to the eventhandler so it can send it to a dom altering function

    // Confirm placement button event listener
    const confirmPlacementBtn = document.getElementById('confirmPlacement');
    confirmPlacementBtn.addEventListener('click', (e) => {
        eventHandler(e);
        placeShips(user);
    })
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

    // Place the ships
    user.gameboard.placeShip(5, carrierStartCoord);
    user.gameboard.placeShip(4, battleshipStartCoord);
    user.gameboard.placeShip(3, cruiserStartCoord);
    user.gameboard.placeShip(3, submarineStartCoord);
    user.gameboard.placeShip(2, destroyerStartCoord);

    console.log(user.gameboard.ships);
}