const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("Arrays with 1 or 2 elements returns [] for [1, 2], [1]", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });
  it("Arrays with odd # of elements returns a single middle element [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("Arrays with even # of elements returns an array of the middle 2 elements [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
});
