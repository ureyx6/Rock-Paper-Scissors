var playerScore = 0
var computerScore = 0
let result = ""

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
    //let promptAnswer = prompt("Choose Rock, Paper, Or Scissors").toLowerCase();
    //let playerChoice = promptAnswer.charAt(0).toUpperCase() + promptAnswer.slice(1);
    //return playerChoice;
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        computerScore += 1
        result = "You lose! Paper beats Rock";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        playerScore += 1
        result = "You win! Paper beats Rock";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        playerScore += 1
        result = "You win! Rock beats Scissors";
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        computerScore += 1
        result = "You lose! Rock beats Scissors";
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        computerScore += 1
        result = "You lose! Scissors beats Paper";
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        playerScore += 1
        result = "You win! Scissors beats Paper";
    } else if (playerChoice == computerChoice) {
        result = "Draw";
    }
    document.getElementById('display').textContent = result
    return
}


function game() {
    function scoreCounter() {
    } if (playerScore == computerScore) {
        console.log("Draw!");
    } else if (playerScore > computerScore) {
        console.log("You have won!");
    } else if (playerScore < computerScore) {
        console.log("You have lost :c.");
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(everyButton => {
    let id = everyButton.getAttribute('id')
    everyButton.addEventListener('click', function () {
        if (id === 'Rock') {
            playRound("Rock", getComputerChoice())
        } else if (id === 'Paper') {
            playRound("Paper", getComputerChoice())
        } else {
            playRound("Scissors", getComputerChoice())
        }
    })
});











//document.querySelectorAll('button').forEach(dog => {
//    let id = dog.getAttribute('id');
//    dog.addEventListener('click', function() {
//      console.log('A button with ID ' + id + ' was clicked!') 
//    } );
//  });
