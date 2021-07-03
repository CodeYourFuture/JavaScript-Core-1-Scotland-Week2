/* 
What is the value we expect to see in the console?
A: 360

Why do we see "undefined"?
A: When the function is called it does not return an answer from the variable `ageInMonths` 
as there is no return statement inside the function, therefore when `myAgeInMonths` is declared 
and the value is set equal to the function calculateAgeInMonths(myAge), once `MyAgeInMonths` is 
console logged it has no value but is declared so javascript assigns it with "undefined".  

ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

function calculateAgeInMonths(ageInYears) {
  let ageInMonths = ageInYears * 12;
  return ageInMonths;
}

let myAge = 30;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);
