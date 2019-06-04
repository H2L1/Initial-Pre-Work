// LEarned to use the || or operator to create a boolean expression that checks two conditions of an if statement. If either one returns true then the entire expression returns true.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
