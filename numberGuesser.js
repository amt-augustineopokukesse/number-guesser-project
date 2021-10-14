let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generate the new secret target number between 0 and 9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
// Determine which guess is closest to the target number.
const secretTargetNumber = generateTarget();
function compareGuesses(userGuess, computerGuess, secretTargetNumber) {
  if (userGuess === computerGuess) {
    return true;
  } else if (Math.abs(secretTargetNumber - userGuess) < Math.abs(secretTargetNumber - computerGuess)) {
    return true;
  } else {
    return false;
  }
}
// Increase winner's score after each win
function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}
// Update round number after each round
function advanceRound() {
  currentRoundNumber += 1;
}
