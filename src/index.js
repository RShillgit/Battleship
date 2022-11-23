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

    // Make ships?
    



}
game();
