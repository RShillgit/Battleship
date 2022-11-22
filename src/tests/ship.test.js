const Ship = require('../ship');

let newShip = Ship(4);
newShip.hit();
newShip.hit();
newShip.hit();
newShip.hit();

test('Hits Ship', () => {
  expect(newShip.hits).toBe(4);
})

test('Sinks Ship', () => {
  expect(newShip.isSunk()).toBe(true);
})