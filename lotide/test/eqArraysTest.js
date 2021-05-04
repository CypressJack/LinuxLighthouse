const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertEqArrays = require('../assertEqArrays');


assertEqArrays([1, 2, 3], [1, 2, 3]); // => true
assertEqArrays([1, 2, 3], [3, 2, 1]); // => false
assertEqArrays(["1", "2", "3"], ["1", "2", 3]); // => false