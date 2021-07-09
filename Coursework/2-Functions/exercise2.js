/* 
What is the value we expect to see in the console?
30
What is the TYPE of error, and what LINE NUMBER does it happen at? What is the ERROR MESSAGE?
the parameter in line 12
Why are we getting this error?
because the parameter is undefined
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