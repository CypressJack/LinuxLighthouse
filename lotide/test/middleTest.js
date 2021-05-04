const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [1] for [2, 1, 7]", () => {
    assert.deepEqual(middle([2, 1, 7]), [1]); 
  });
});
