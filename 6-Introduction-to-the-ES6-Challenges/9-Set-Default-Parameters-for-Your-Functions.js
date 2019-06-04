// LEarned to set a default paramater for a function's argument so that if it doesn't get a value, it defaults to what you set

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
