/* 
What is the value we expect to see in the console?
Answer: we expect it to be 30
What is the TYPE of error, and what LINE NUMBER does it happen at? What is the ERROR MESSAGE?
Answer: Uncaught ReferenceError: y is not defined which appears on line 12.
Why are we getting this error?
Answer: we are getting this error because the function calculateArea is only expecting one parameter to be passed in but on line 21 we are passing 2 parameters for the neccessary calculation.
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
