// I figured out how to actully use the case statements this time around. This was mostly practice to put together what I'd learned about switch statements thus far

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
