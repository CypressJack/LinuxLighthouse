// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

const head = function (array1) {
  if (array1.length === 0) {
    return undefined;
  } else {
    return array1[0];
  }
};
module.exports = head;
