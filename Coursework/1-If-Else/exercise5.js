// I would like to buy a sandwich. Do I have enough money?

let myMoney = 10.66;

let sandwichCost = 2.50;

// Write an "if" statement below to print either - 
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("

let message = "";

if (myMoney >= sandwichCost) {
    message = "You can afford the sandwich :-)";
}else {
    message = "You don't have enough money :-(";
}

// For extra credit, can you tell me how much change I get? 

change = myMoney - sandwichCost;

let changeMessage = "";

if (sandwichCost > myMoney) {
    changeMessage = "";
}else {
    changeMessage = " and your change is £";
}

console.log(message + changeMessage + change);