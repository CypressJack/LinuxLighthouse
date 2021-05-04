const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("Returns everything except for the first item in the array [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("Returns everything except for the first item in the array ['3, 4, 5, '3', 1] for ['2', 3, 4, 5, '3', 1]", () => {
    assert.deepEqual(tail([2, 1]), [1]); 
  });
});






// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);