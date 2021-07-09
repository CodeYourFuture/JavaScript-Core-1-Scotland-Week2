// I would like to buy a sandwich. Do I have enough money?

let myMoney = 1.66;

let sandwichCost = 2.5;

// Write an "if" statement below to print either -
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("
if (sandwichCost <= myMoney) {
  message = "You can afford the sandwich :-)";
} else {
  message = "You don't have enough money :-(";
}
console.log(message);

// For extra credit, can you tell me how much change I get?

let additionalOrChange = myMoney - sandwichCost;
noChange = additionalOrChange.toFixed(2);
let reverseNoChange = noChange * -1;
console.log(reverseNoChange);

console.log(
  " No change instead you will need extra money equal to " + reverseNoChange
);
