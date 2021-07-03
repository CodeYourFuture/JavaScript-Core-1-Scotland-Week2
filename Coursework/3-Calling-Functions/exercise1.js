/*
ONLY CHANGE LINE 21 to answer this question

This code has a bug - if we run it we see the result "Hello undefined"

Why are we getting this result?
A: Function greet() on line 22 is called without passing the variable `myName` 
as a parameter to the function so when the string on line 22 is concatenated to 
include `name`, and subsequently returned, `name` has no value although declared 
so when `greeting` is console logged the string shown contains undefined which represents 
the empty value of name. 

Please fix this code so we get the result "Hello Marissa"

ONLY CHANGE LINE 21
*/

function greet(name) {
  name = "Hello " + name;
  return name;
}

let myName = "Marissa";

// ONLY CHANGE CODE ON LINE 21
let greeting = greet(myName);

console.log(greeting);
