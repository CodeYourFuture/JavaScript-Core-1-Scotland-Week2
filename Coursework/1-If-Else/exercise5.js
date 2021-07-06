// I would like to buy a sandwich. Do I have enough money?

let myMoney = 1.66;

let sandwichCost = 2.50;

// Write an "if" statement below to print either - 
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("
if (myMoney >= sandwichCost) {
    console.log("You can afford the sandwich :-)");
} else console.log("You don't have enough money :-(");


let diff = (myMoney, sandwichCost) => {
    return Math.abs(1.66 - 2.50);
}

console.log(diff());


// For extra credit, can you tell me how much change I get?