// LEared that const arrays are still mutable. Practiced working with this mutability

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  var x = s.pop();
  s.unshift(x);

  // change code above this line
}
editInPlace();
