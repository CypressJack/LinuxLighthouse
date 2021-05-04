const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  } else {
    return false
  }
}

const takeUntil = function(data, rule) {
    let result = [];
    for (const element of data) {
      if(!rule(element)) {
        result.push(element)
      } else {
        return result;
      }
    }
  }


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertEqual(eqArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]), true);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;