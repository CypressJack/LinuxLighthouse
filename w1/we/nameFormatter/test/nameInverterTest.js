const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const nameInverter = require('../nameInverter.js');

describe('nameInverter', function() {
  it("should return an empty string when passed an empty string", function() {
    const name = ""
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "");
  });

  it("should return a single name when passed a single name", function() {
    const name = "name"
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "name");
  });

});
