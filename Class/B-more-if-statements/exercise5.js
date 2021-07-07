
// Currency converter

// The values of currency can be GBP, EUR or USD
let currency = "POUNDS";

let symbol = "";

// Complete the "if/else" statements below so it sets the correct value for symbol
if (currency === "EUR") {
    symbol = "€";
} else if (currency === "DOLLAR") {
    symbol = "$";
} else if (currency === "POUNDS") {
    symbol = "£";
}

console.log("Currency is " + currency + ", and symbols is: " + symbol);

// Try changing the value of currency on line 5 to show different results