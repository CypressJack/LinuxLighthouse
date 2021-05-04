const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns the first element in an array - 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns the first element in the array - '5' for ['5', '6', '7', '8']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns the single element in a one element array - '3' for ['3']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns undefined for and empty array - undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
});
