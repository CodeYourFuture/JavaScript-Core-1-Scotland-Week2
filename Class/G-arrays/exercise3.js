// Here we are declaring an ARRAY with 7 values but there are errors!
let days = [
  "Monday",
  "Tuesday",
  "xxx",
  "Thursday",
  "xxx",
  "Saturday",
  "Sunday",
];

// Here we correct one of the values
days[2] = "Wednesday";

// Write code below so our array has "Friday" in the right place
days[4] = "Friday";

days[7] = "We need more Saturdays at the weekend";

console.log("5th day of the week is: " + days[4]);

console.log(days[7]);

console.log("Yes more..." + days[5] + " And Thanks to all voluntary team.");
