// I would like to buy a sandwich. Do I have enough money?

// Declare and initialise variables
let myMoney = 4.66;
let sandwichCost = 2.5;
let change = 0;
let moneyShort = 0;

// Calculate change due or money shore, rounded to 2 d.p
change = (myMoney - sandwichCost).toFixed(2);
moneyShort = (sandwichCost - myMoney).toFixed(2);

// Write an "if" statement below to print either -
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("

if (sandwichCost < myMoney) {
  purchase = `You can afford the sandwich and your change is £${change}.`;
} else {
  purchase = `You don't have enough money, you are £${moneyShort} short.`;
}

console.log(purchase);
// For extra credit, can you tell me how much change I get?
