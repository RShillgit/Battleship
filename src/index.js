import _ from 'lodash';
import './style.css';
import Ship from './ship';


let ship1 = Ship(5);
console.log(ship1);
ship1.hit();
ship1.hit();
ship1.hit();
ship1.hit();
console.log(ship1.isSunk());
ship1.hit();
console.log(ship1.isSunk());