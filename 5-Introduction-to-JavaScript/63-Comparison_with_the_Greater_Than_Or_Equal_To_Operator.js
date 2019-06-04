// LEarned to use the >= comparator to check if values on the left are greater than or equal to the values on the right. Returns true if they are and doesn't do a data conversion.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
