// Here we are declaring an ARRAY with 12 values
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Change the lines below so the answers are correct
console.log("March: " + months[2]);

console.log("December: " + months[11]);

console.log("January: " + months[0]);

console.log(months.length);

//arrow function
monthsUppercase = months.map((months) => months.toUpperCase());

console.log(monthsUppercase);

monthsLowerCase = months.map((months) => months.toLowerCase());

console.log(monthsLowerCase);

console.log(months);

//variable declaration normal function
let monthsUpCa = months.map(function (months) {
  return months.toUpperCase();
});

console.log(monthsUpCa);

let monthsLoCa = months.map(function (months) {
  return months.toLowerCase();
});

console.log(monthsLoCa[0][5]);5
