var once = require("..").once;
var assert = require("chai").assert;

describe("once",function() {
  it("should execute a function only once",function() {
    var i = 0;
    function add1() {
      return i += 1;
    }

    addOnce = once(add1);

    addOnce();
    addOnce();
    addOnce();

    assert.equal(i,1);
  });

  it("should return the result of the invoked function", function() {
    var i = 0;
    function add1() {
      i += 1;
      return i;
    }

    addOnce = once(add1);

    assert.equal(addOnce(),1);
    assert.equal(addOnce(),1);
    assert.equal(addOnce(),1);

  });

  it("should return undefined if function returns undefined",function() {
    function blah() {
      return;
    }

    blahOnce = once(blah);

    assert.equal(blahOnce(),undefined);
  });


});