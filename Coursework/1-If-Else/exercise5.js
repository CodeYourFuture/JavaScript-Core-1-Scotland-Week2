// I would like to buy a sandwich. Do I have enough money?

let myMoney = 1.66;
myMoney = 10.55;
let sandwichCost = 2.5;

// Write an "if" statement below to print either -
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("
if (myMoney >= sandwichCost) {
  console.log("You can afford the sandwich :-)");
  let change = myMoney - sandwichCost;
  console.log("Thank you for shopping, here's your change: " + "£" + change);
} else {
  console.log("You don't have enough money :-(");
}

// For extra credit, can you tell me how much change I get?
