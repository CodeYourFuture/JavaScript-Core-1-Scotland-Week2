/* 
What is the value we expect to see in the console?
A: 30

What is the TYPE of error, and what LINE NUMBER does it happen at? What is the ERROR MESSAGE?
A: The error TYPE is "Uncaught ReferenceError:", The error message is "y is not defined" and it happens on line 14.

Why are we getting this error?
A: The function only contains an "x" parameter and does not have a y parameter so when function calculateArea(width, height) 
is called with variables the y variable cannot be passed into the function for calculation.


ONLY CHANGE the code of calculateArea function - 
please fix this bug so we see the result is "30"
*/

function calculateArea(x, y) {
  let areaValue = x * y;
  return areaValue;
}

let width = 10;

let height = 3;

let area = calculateArea(width, height);

console.log(area);
