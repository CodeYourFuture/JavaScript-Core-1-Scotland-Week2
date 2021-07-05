/* 
What is the value we expect to see in the console?

Why do we see "undefined"?

ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

function calculateAgeInMonths(ageInYears){
    let ageInMonths = ageInYears * 12;
    // corrected the function so that it gives back a value using a return statement
    
    return ageInMonths;
}

let myAge = 1;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);