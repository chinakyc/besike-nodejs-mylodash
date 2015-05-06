var assert = require("chai").assert;

var _ = require("..");

describe("bind",function() {
  it("should force this to be a context object",function() {
    function returnThis() {
      return this;
    }

    var foo = {name: "foo"};
    var bar = {name: "bar"};

    var returnFoo = _.bind(returnThis,foo);
    var returnBar = _.bind(returnThis,bar);

    assert.deepEqual(returnFoo(),foo);
    assert.deepEqual(returnBar(),bar);
  });

  it("should work with multi-arguments", function() {
    function returnThis_with_args(arg1,arg2,arg3) {
      return [this, arg1, arg2, arg3];
    }

    var foo = {name: "foo"};

    var returnFoo = _.bind(returnThis_with_args,foo);
    var arg1 = 1, arg2 = 2, arg3 = 3;
    
    var except_result = [foo, arg1, arg2, arg3];

    assert.deepEqual(returnFoo(arg1, arg2, arg3), except_result);
  });
});

