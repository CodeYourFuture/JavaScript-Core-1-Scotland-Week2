
// Here we are declaring an ARRAY with 7 values
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Change the lines below so the answers are correct
console.log("The first day of the week is: " + days[0]);

console.log("The last day of the week is: " + days[6]);

console.log("After Monday is: " + days[1]);

console.log("3 days before Saturday: " + days[2]);

console.log("3 days after Monday: " + days[3]);

console.log("The day after Thursday is: " + days[4]);

console.log("The happy day after finish labor week: " + days[5]);

let messageDay = "It's class day be prepare!!!" 

function studentLife (){
    if (days[4] === "Saturday"){
        return messageDay;
    }else {
        return "Keep practicing JS"
    }
}
console.log(studentLife());


 