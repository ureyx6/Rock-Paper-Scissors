var playerScore = 0
var computerScore = 0

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
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
        computerScore += 1
        return "You lose! Paper beats Rock";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        playerScore += 1
        return "You win! Paper beats Rock";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        playerScore += 1
        return "You win! Rock beats Scissors";
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        computerScore += 1
        return "You lose! Rock beats Scissors";
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        computerScore += 1
        return "You lose! Scissors beats Paper";
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        playerScore += 1
        return "You win! Scissors beats Paper";
    } else if (playerChoice == computerChoice) {
        return "Draw";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
function scoreCounter() {
    } if (playerScore == computerScore) {
        console.log("Draw!");
    } else if (playerScore > computerScore) {
        console.log("You have won!");
    } else if (playerScore < computerScore) {
        console.log("You have lost :c.");
    }
}
game();

