// Learned to use case and switch statements to choose an outcome/answer based on the value of the switch(condition). Also, learned to use break which tells javascript to exit a code block/loop

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
