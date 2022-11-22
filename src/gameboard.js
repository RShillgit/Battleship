const Ship = require("./ship");

function Gameboard() {
    return {
        ships: [],
        misses: [],

        // Creates new ship with the length, starting coordinates, then calculates the ending coordinates
        placeShip(length, [x, y]) {

            let newShip = Ship(length);
            newShip.startCoord = [x, y];

            if (newShip.direction === 'horizontal') newShip.endCoord = [(x + (length - 1)), y]; 
            else newShip.endCoord = [x, (y - (length - 1))];

            this.ships.push(newShip);

            return newShip.endCoord;
        },
        
        // Checks if an attack has hit one of the ships
        receiveAttack([x, y]) {
            for (let i = 0; i < this.ships.length; i++) {

                // If the ship is horizontal
                if(this.ships[i].direction === 'horizontal' ) {
                    // And y is the same as the ships y coordinate, and x is on or inbetween the ships x coordinates, then its a hit
                    if(y == this.ships[i].startCoord[1] && x >= this.ships[i].startCoord[0] && x <= this.ships[i].endCoord[0]) {
                        
                        // Register hit on ship
                        this.ships[i].hit();
                        // Check if ship is sunk
                        this.ships[i].isSunk();

                        return 'Hit';
                    }
                    // Push miss coordinate to the misses array
                    this.misses.push([x, y]);
                    return 'Miss';
                }

                // If the ship is vertical
                if(this.ships[i].direction === 'vertical' ) {
                    // And x is the same as the ships x coordinate, and y is on or inbetween the ships y coordinates, then its a hit
                    if(x == this.ships[i].startCoord[0] && y <= this.ships[i].startCoord[1] && y >= this.ships[i].endCoord[1]) {

                        // Register hit on ship
                        this.ships[i].hit();
                        // Check if ship is sunk
                        this.ships[i].isSunk();

                        return 'Hit';
                    }
                    // Push miss coordinate to the misses array
                    this.misses.push([x, y]);
                    return 'Miss';
                }
            };
        },

        allSunk() {
            return this.ships.every(ship => ship.sunk === true); 
        }
        
    }
}
module.exports = Gameboard;