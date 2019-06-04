// Learned to use the let keyword instead of var to declare variables which helps to look for multiple delcartions of the same variable name and throws an error
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
