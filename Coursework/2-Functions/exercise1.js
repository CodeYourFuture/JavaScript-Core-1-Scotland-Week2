/* 
What is the value we expect to see in the console?

Why do we see "undefined"?


ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

let question1 = "We expected to see the value of '30'";
console.log(question1);
let question2 =
  "we see undefined because we never declared the return and what to return inside the function. ";
console.log(question2);

function calculateAgeInMonths(ageInYears) {
  let ageInMonths = ageInYears * 12;
  // remember we have to return the value!
  return ageInMonths;
}

let myAge = 30;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);
