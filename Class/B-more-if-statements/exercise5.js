// Currency converter

// The values of currency can be GBP, EUR or USD
let currency = "USD";

let symbol = "$";

// Complete the "if/else" statements below so it sets the correct value for symbol
if(currency === "EUR"){
    symbol = "€";
}else if(currency === "USD"){
    symbol = "$";
}else if(currency === "GBP"){
    symbol = "£";
}

console.log("Currency is " + currency + ", and symbols is: " + symbol);