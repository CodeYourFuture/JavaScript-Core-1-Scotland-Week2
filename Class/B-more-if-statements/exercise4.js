
let theYear = 2020;

// Write an "if/else" statement below to print either - 
// "Year is in the past"
// "It is the current year"
// "Year is in the future"
let message = "It is the current year";

if (theYear > 2021) {
    message = "Year is in the future";
} else if (theYear<2021) {
    message = "Year is in the past";
}

console.log(message);


