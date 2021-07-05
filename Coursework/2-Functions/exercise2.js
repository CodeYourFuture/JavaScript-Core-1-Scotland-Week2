/* 
What is the value we expect to see in the console? - 30

What is the TYPE of error, and what LINE NUMBER does it happen at? What is the ERROR MESSAGE? - Type: missing character, Line: 12, error message: Uncaught ReferenceError: y is not defined

Why are we getting this error? - on line 12 in the input parameter the argument "y" was missing and so it was not defined

ONLY CHANGE the code of calculateArea function - 
please fix this bug so we see the result is "30"
*/

function calculateArea(x, y){
    let areaValue = x * y;
    return areaValue;
}

let width = 10;

let height = 3;

let area = calculateArea(width, height);

console.log(area);