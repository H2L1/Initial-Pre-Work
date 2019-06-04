// Learned about the local scope of variables not being able to be called outside of functions they were declared in

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 0;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
