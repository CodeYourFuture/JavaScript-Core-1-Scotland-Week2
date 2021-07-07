/* 
We have written code below that does the same thing 3 times.

We should REFACTOR this code.

We should write a function, and call the function 3 times.

The results should stay THE SAME
*/

function greeting(firstName, surname) {
  return "Hello " + firstName + " " + surname;
}

let firstName1 = "Katrina";
let surname1 = "Lake";

let firstName2 = "Eric";
let surname2 = "Yuan";

let firstName3 = "Jeff";
let surname3 = "Bezos";

console.log(greeting(firstName1,surname1));
console.log(greeting(firstName2,surname2));
console.log(greeting(firstName3,surname3));
