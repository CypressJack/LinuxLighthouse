const middle = function(array) {
  let newArray = [];
  let half = array.length / 2;
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 === 1 && array.length !== 1) {
    newArray.push(array[Math.floor(half)]);
    return newArray;
  } else if (array.length % 2 === 0 && array.length !== 2) {
    newArray.push(array[Math.floor(half) - 1]);
    newArray.push(array[Math.floor(half)]);
    return newArray;
  }
};

console.log(middle([1, 2, 3]));

module.exports = middle;