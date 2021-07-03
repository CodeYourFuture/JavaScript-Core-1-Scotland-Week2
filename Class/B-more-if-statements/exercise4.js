let theYear = 2025;

// Write an "if/else" statement below to print either -
// "Year is in the past"
// "It is the current year"
// "Year is in the future"

let date = new Date().getFullYear();
// console.log(date);

if (theYear === date) {
  console.log("It is the current year");
} else if (theYear > date) {
  console.log("Year is in the future");
} else {
  console.log("Year is in the past");
}
