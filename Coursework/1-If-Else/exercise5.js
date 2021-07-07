// I would like to buy a sandwich. Do I have enough money?

let myMoney = 5.66;

let sandwichCost = 2.5;

let change = 0;

// Write an "if" statement below to print either -
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("
if (myMoney < sandwichCost) {
  console.log("You don't have enough money :-(");
} else if (myMoney > sandwichCost) {
  change = myMoney - sandwichCost;
  console.log("You can afford the sandwich :-), and your change is " + change);
} else {
  console.log("You can afford the sandwich :-), and your change is " + change);
}

// For extra credit, can you tell me how much change I get?
