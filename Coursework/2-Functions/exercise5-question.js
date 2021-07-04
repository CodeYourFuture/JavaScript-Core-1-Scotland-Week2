/* 
We have written code below that does the same thing 3 times.

We should REFACTOR this code.

We should write a function, and call the function 3 times.

The results should stay THE SAME
*/

function message(firstName,surname){
    let greeting = "Hello " + firstName + " " + surname;
    console.log(greeting);
}

let firstName1 = "Katrina";
let surname1 = "Lake";
// Change the line below to call your function!
message("Katrina","Lake");

let firstName2 = "Eric";
let surname2 = "Yuan";
// Change the line below to call your function!
message("Eric","Yuan");

let firstName3 = "Jeff";
let surname3 = "Bezos";
// Change the line below to call your function!
message("Jeff","ezos");
