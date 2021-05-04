// FUNCTION IMPLEMENTATION
const assertEqual  = require('./assertEqual');

const assertEqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

module.exports = assertEqArrays;