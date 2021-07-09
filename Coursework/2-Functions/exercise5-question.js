/* 
We have written code below that does the same thing 3 times.

We should REFACTOR this code.

We should write a function, and call the function 3 times.

The results should stay THE SAME
*/
function greetMe(firstName, surname) {
    let greeting = "Hello " + firstName + " " + surname;
    console.log(greeting);
}

let firstName1 = "Katrina";
let surname1 = "Lake";
// Change the line below to call your function!
greetMe(firstName1, surname1);

let firstName2 = "Eric";
let surname2 = "Yuan";
// Change the line below to call your function!
greetMe(firstName2, surname2);

let firstName3 = "Jeff";
let surname3 = "Bezos";
// Change the line below to call your function!
greetMe(firstName3, surname3);
