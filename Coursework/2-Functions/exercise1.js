/* 
What is the value we expect to see in the console?

Why do we see "undefined"?

ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

function calculateAgeInMonths(ageInYears){
    return  ageInYears * 12;
    // remember we have to return the value!
}

let myAge = 30;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);