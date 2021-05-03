const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  } else {
    return false
  }
};

module.exports = eqArrays;