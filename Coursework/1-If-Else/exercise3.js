let score = 75;

let grade = "C";

// Write an "if/else" statement so that -
// If the score is between 50 and 75, grade = B
// If the score is above 75, grade = A
if (score > 75) {
  grade = "A";
} else if (score >= 50 && score <= 75) {
  grade = "B";
} else grade = "C";

console.log(grade);
