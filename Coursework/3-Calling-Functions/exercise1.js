/*
ONLY CHANGE LINE 21 to answer this question

This code has a bug - if we run it we see the result "Hello undefined"

Why are we getting this result?

Please fix this code so we get the result "Hello Marissa"

ONLY CHANGE LINE 21
*/

let question1 =
  " I am getting the answer 'Hello undefined' because when declaring my function I left an empty where I should have put the value of parameter .";
console.log(question1);

function greet(name) {
  name = "Hello " + name;
  return name;
}

let myName = "Marissa";

// ONLY CHANGE CODE ON LINE 21
let greeting = greet(myName);

console.log(greeting);
