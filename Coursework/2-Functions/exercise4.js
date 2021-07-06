/* 
In this exercise, you have to make the code work
by writing a function!

Look at where the function is being called (line 20)
What is the name of the function we need? calculateMonthsInYear
How many input parameters do we need? one
What is the result we need to return? the number of months in x years, in this case 5

To complete this exercise you ONLY need to
write the function
*/

// write your function here
function calculateMonthsInYear(x) {
    return years * 12;
}

// Don't change any of the code below
let years = 5;

let months = calculateMonthsInYear(years);

console.log(months);