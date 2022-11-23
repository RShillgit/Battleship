import _ from 'lodash';
import './style.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import { gameboardGrids } from './dom';

// Create main game loop
function game() {

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



}
game();
