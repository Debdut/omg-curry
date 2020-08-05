(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.curry = factory());
}(this, (function () { 'use strict';

  function op_sequential(operator, count) {
    let index = 1;
    return function next(a) {
      if (index < count) {
        index++;
        return function (b) {
          if (b) {
            return next(operator(a, b, index));
          }

          return a;
        };
      }

      return a;
    };
  }

  function op_lazy(operator, count) {
    let index = 1;
    return function next(...a) {
      if (index < count) {
        index++;
        return function (b) {
          if (b) {
            return next(...a, b);
          }

          return a.reduce(operator);
        };
      }

      return a.reduce(operator);
    };
  }

  function op(operator, count = Infinity, lazy = false) {
    if (lazy) {
      return op_lazy(operator, count);
    }

    return op_sequential(operator, count);
  }

  function fixed(f) {
    return function next(...a) {
      if (a.length < f.length) {
        return function (...b) {
          return next(...a, ...b);
        };
      }

      return f(...a);
    };
  }

  var index = {
    op,
    fixed
  };

  return index;

})));
