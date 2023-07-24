function getComputerChoice() {
let randomizer = Math.floor(Math.random()*3);
if (randomizer == 0) {
    let computerChoice = "Rock";
    return computerChoice;
} else if (randomizer == 1) {
    let computerChoice = "Paper";
    return computerChoice;
} else {
    let computerChoice = "Scissors";
    return computerChoice
}
}
function getPlayerChoice() {
let promptAnswer = prompt("Choose Rock, Paper, Or Scissors").toLowerCase();
let playerChoice = promptAnswer.charAt(0).toUpperCase() + promptAnswer.slice(1);
return playerChoice;
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "You lose! Paper beats Rock";
      } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "You win! Paper beats Rock";
      } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "You win! Rock beats Scissors";
      } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return "You lose! Rock beats Scissors";
      } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "You lose! Scissors beats Paper";
      } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "You win! Scissors beats Paper";
      } else if (playerChoice == computerChoice) {
        return "Draw";
}
}

