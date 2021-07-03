/* 
What is the value we expect to see in the console?
y is not defined
What is the TYPE of error, and what LINE NUMBER does it happen at? What is the ERROR MESSAGE?
the type is input variable in line 12, y is not defined and Process exited with code 1

Why are we getting this error?
because y argument is not defined 

ONLY CHANGE the code of calculateArea function - 
please fix this bug so we see the result is "30"
*/

function calculateArea(x,y){
    let areaValue = x * y;
    return areaValue;
}

let width = 10;

let height = 3;

let area = calculateArea(width, height);

console.log(area);