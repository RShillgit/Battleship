const Player = require('../player');

let player1 = Player(1);

let player2 = Player(2);
player2.createBoard();

player2.gameboard.placeShip(4, [5, 5]);

test('Creates Board Object', () => {
    expect(player1.createBoard() && typeof player1.createBoard() === 'object').toBe(true);
})

player1.createEnemy(player2)
test('Creates Enemy', () => {
    expect(typeof player1.enemy).toBe('object');
})

// Change player 1's turn to true and attack
player1.switchTurn();
player1.attack([1, 1]);
test('Attacks Enemy', () => {
    expect(player2.gameboard.misses.length >= 1).toBe(true);
})


