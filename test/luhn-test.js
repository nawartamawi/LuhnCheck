var assert = require("chai").assert;
var check = require("../lib/check");

describe("check", function() {
  it("should return true if a number is a valid", function() {
    var number = 6011000990139424;
    var result = check(number);
    assert.isTrue(result);
  });

  it("should return false if a number is NOT valid", function() {
    var number = 4324;
    assert.isFalse(check(number));
  });
});