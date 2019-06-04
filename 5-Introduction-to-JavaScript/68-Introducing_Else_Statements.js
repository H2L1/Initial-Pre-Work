// LEarned to use an else statement at the end of an if statement so that if the if statement returns false, then the else statement will execute.

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }



  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
