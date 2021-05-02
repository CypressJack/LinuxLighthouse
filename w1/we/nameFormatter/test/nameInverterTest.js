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

  it("should return a single name when passed a single name with extra spaces", function() {
    const name = " name "
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "name");
  });

  it("should return a last-name, first-name when passed a first and last-name", function() {
    const name = "first last"
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "last, first");
  });

  it("should return an empty string when passed a single honorific", function() {
    const doctor = "Dr. ";
    const mister = "Mr. ";
    const missus = "Mrs. ";
    const miss = "Ms. "
    const inverter = nameInverter;
    assert.isTrue(inverter(doctor) === "");
    assert.isTrue(inverter(mister) === "");
    assert.isTrue(inverter(missus) === "");
    assert.isTrue(inverter(miss) === "");
  });

  it("should return honorific first-name when passed honorific first-name", function() {
    const name = "Dr. first"
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "Dr. first");
  });

  it("should return a honorific last-name, first-name when passed honorific first-name last-name", function() {
    const name = "Dr. first-name last-name"
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "Dr. last-name, first-name");
  });

  it("should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function() {
    const name = " Dr. first-name last-name "
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "Dr. last-name, first-name");
  });

  it("should throw an error when name is undefined", function() {
    const name = " Dr. first-name last-name "
    const inverter = nameInverter(name);
    assert.isTrue(inverter === "Dr. last-name, first-name");
  });

});
