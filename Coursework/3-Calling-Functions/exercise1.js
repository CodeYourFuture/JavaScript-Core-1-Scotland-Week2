/*
ONLY CHANGE LINE 21 to answer this question

This code has a bug - if we run it we see the result "Hello undefined"

Why are we getting this result?

Please fix this code so we get the result "Hello Marissa"

ONLY CHANGE LINE 21
*/

function greet(name){
    name = "Hello " + name;
    return name;
}

let myName = "Marissa";

// ONLY CHANGE CODE ON LINE 21
<<<<<<< HEAD
let greeting = greet("Marissa");
=======
let greeting = greet(myName);
>>>>>>> fc1ec8c13599a311ade878caed5684a719cfa1ca

console.log(greeting);