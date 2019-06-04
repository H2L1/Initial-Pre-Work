// LEarned to use the default statement in a switch statement. IT acts like an else statement at the end of an if statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
