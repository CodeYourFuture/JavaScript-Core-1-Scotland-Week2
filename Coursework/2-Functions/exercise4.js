/* 
In this exercise, you have to make the code work
by writing a function!

Look at where the function is being called (line 20)
What is the name of the function we need? calculateMonthsInYear
How many input parameters do we need? 1
What is the result we need to return? months

To complete this exercise you ONLY need to
write the function
*/

// write your function here
function calculateMonthsInYear(y) {
 monthsValue = y * 12 ;
 return monthsValue; 
}

// Don't change any of the code below
let years = 5;

let months = calculateMonthsInYear(years);

console.log(months);