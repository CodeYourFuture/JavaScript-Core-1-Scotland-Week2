/*
ONLY CHANGE LINE 23 to answer this question

This code has a bug - run it and see what the result is

Why are we getting this result?
A: The variables sent as parameters to the function are in the 
incorrect order so when the calculation is performed the returned value is negative.

Please fix this code so we get the result "39"

ONLY CHANGE LINE 23
*/

function calculateAge(yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return age;
}

let yearIWasBorn = 1982;

let thisYear = 2021;

// ONLY CHANGE CODE ON LINE 23
let myAge = calculateAge(yearIWasBorn, thisYear);

console.log(myAge);
