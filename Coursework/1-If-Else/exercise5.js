// I would like to buy a sandwich. Do I have enough money?

let myMoney = 3.3;

let sandwichCost = 2.5;

// Write an "if" statement below to print either - 
// "You can afford the sandwich :-)" or
// "You don't have enough money :-("
if(myMoney >= sandwichCost){
   difference = myMoney - sandwichCost;
   change = Math.floor(difference*100)/100;
   message = "You can afford the sandwich :-) The change is £" + change;   
}else{
    message =  "You don't have enough money :-(";
}


// For extra credit, can you tell me how much change I get?


console.log(message);