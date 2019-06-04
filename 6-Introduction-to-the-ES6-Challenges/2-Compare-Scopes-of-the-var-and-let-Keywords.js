// Practiced using the let keyword some more. LEarned it can be used to declare multiple of the same named variable. The local ones retain the value you assign them within their statement without overwriting any same named variables that are outside of the local statement.
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
