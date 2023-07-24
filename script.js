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
console.log(getComputerChoice());