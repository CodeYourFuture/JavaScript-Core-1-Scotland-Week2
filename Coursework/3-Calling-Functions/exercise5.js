/*
ONLY CHANGE LINE 23 to answer this question

This code has a bug - run it and see what the result is (-39)

Why are we getting this result? The parameters in the called function are placed the other way round.

Please fix this code so we get the result "39"

ONLY CHANGE LINE 23
*/

function calculateAge(yearOfBirth, currentYear){
    let age = currentYear - yearOfBirth;
    return age;
}

let yearIWasBorn = 1982;

let thisYear = 2021;

// ONLY CHANGE CODE ON LINE 23
let myAge = calculateAge( yearIWasBorn, thisYear);

console.log(myAge);