// Learned to use the function rest operator to allow for multiple arguments to be passed to a function without specifically declaring them

const sum = (function() {
  "use strict";
  return function sum(...args) {
    //args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
