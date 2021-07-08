/* 
What is the value we expect to see in the console?
Answer = we expect to see 30 * 12 = 360

Why do we see "undefined"?
Answer: because we have not returned the value from the function. 

ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

function calculateAgeInMonths(ageInYears) {
  return ageInYears * 12;
  // remember we have to return the value!
}

let myAge = 30;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);
