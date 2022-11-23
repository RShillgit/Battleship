const Gameboard = require("./gameboard");

function Player(id) {

    return {
        turn: false, // Used to switch turns between user and AI
        player: id, // Player 1 is the user, player 2 will be the AI
        gameboard: null,
        enemy: null,
        attacks: [],

        // Creates the player's gameboard
        createBoard() {
            return this.gameboard = Gameboard(this.player);
        },

        createEnemy(enemy) {
            return this.enemy = enemy;
        },

        switchTurn() {
            return this.turn = !this.turn;
        },

        attack([x, y]) {

            // User
            if(this.player === 1) {
                // If its the players turn, and the coordinates have not been attacked already
                if (this.turn === true && this.attacks.includes([x, y]) === false) {

                    // Attack the enemy
                    this.enemy.gameboard.receiveAttack([x, y]);

                    // Push coordinates to player's attacks array
                    this.attacks.push([x, y]);

                    // Switch turns to false
                    this.switchTurn();
                }
                return
            }

        }


    }
}
module.exports = Player;