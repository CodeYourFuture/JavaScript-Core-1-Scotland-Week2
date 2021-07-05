// The red team and blue team are playing football

let redScore = 5;

let blueScore = 5;

// Write an "if/else" statement below to print either - 
// "Red has won!"
// "Blue has won!"
// "It is a draw"

let message = "";

if (redScore === blueScore) {
    message = "It is a draw!";
}else if (redScore > blueScore) {
    message = "Red has won!";
}else {
    message = "Blue has won!";
}

console.log(message);