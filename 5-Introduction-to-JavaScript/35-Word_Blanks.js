// Practiced concatenation with multiple string variables to create a madlib

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " for the food.";
    myNoun = "dog";
    myAdjective = "big";
    myVerb = "ran";
    myAdverb = "quickly";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
