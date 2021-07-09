/* 
In this exercise, you have to make the code work
by writing a function!

Look at where the function is being called (line 20)
What is the name of the function we need?
How many input parameters do we need?
What is the result we need to return?

To complete this exercise you ONLY need to
write the function
*/

// write your function here

// Don't change any of the code below
let question1 = " The name of the function is 'calculateMonthsInYear'";
console.log(question1);

let input = " We need one parameter";
console.log(input);

let result = " number of months equivalent to 5 years.";
console.log(result);

function calculateMonthsInYear(num) {
  totalMonths = num * 12;
  return totalMonths;
}
let years = 5;

let months = calculateMonthsInYear(years);

console.log(months);
