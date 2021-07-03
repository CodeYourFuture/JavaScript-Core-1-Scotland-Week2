/*
ONLY CHANGE LINE 23 to answer this question

This code has a bug - if we run it we see the result "John undefined"

Why are we getting this result?
A: Only the `customerFirstName` variable is being passed as a parameter to the fullName function 
so as the function is expecting to concatenate a string on line 15 that also included the variable `customerSurname` 
represented by parameter `surname` it returns a string with undefined in place of the surname value.

Please fix this code so we get the result "John Legere"

ONLY CHANGE LINE 23
*/

function fullName(firstName, surname) {
  let fullName = firstName + " " + surname;
  return fullName;
}

let customerFirstName = "John";

let customerSurname = "Legere";

// ONLY CHANGE CODE ON LINE 23
let customerFullName = fullName(customerFirstName, customerSurname);

console.log(customerFullName);
