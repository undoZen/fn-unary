var assert = require('assert');
var unary = require('../');
describe('fn-unary', function () {
  it('fn.length should be 1', function () {
    var fn = function (a, b) {};
    assert(unary(fn).length == 1);
  });
  it('should be called with exactly one argument', function () {
    var fn = function (a, b) {
      return arguments.length;
    }
    assert(unary(fn)() == 1);
  });
  it('second argument should be undefined', function () {
    var fn = function (a, b) {
      return typeof b;
    }
    assert(unary(fn)(1,2,3,4) === 'undefined');
  });
});
