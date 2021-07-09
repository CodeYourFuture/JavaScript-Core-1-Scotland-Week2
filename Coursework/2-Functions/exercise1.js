/* 
What is the value we expect to see in the console?
360
Why do we see "undefined"?
because of wrong parameter
ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

function calculateAgeInMonths(ageInYears){
    let ageInMonths = ageInYears * 12;
    return ageInMonths;
}

let myAge = 30;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);

