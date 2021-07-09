/* 
What is the value we expect to see in the console?

What is the TYPE of error, and what LINE NUMBER does it happen at? What is the ERROR MESSAGE?

Why are we getting this error?

ONLY CHANGE the code of calculateArea function - 
please fix this bug so we see the result is "30"
*/
let question1 =
  " I expected to see error as we have only one parameter, x in function";
console.log(question1);

let question2 =
  "we have one instead of two,line 16 inside the function, 'y is not defined'";
console.log(question2);

let question3 =
  "We used one parameter and declared two parameters which are different to function parameters";
console.log(question3);

function calculateArea(x, y) {
  let areaValue = x * y;
  return areaValue;
}

let width = 10;

let height = 3;

let area = calculateArea(width, height);

console.log(area);
