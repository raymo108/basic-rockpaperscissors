// create an array to store the random choice from computerChoice
const options = ['rock', 'paper', 'scissors']

function getComputerChoice(options) {      // Create a function called getComputerChoice
    const computerChoice = Math.floor(Math.random() * options.length); // Pick a random index in the array of options
    return options[computerChoice]; // return the element within the generated index

}

let computerCounter = 0;
let userCounter = 0;

function playRound (playerSelection, computerSelection) {
    // convert playerSelection to lowercase no matter what for case-sensitivty
    playerSelection = playerSelection.toLowerCase();
    console.log("Computer selected " + computerSelection);
  
 
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        incrementComputerCount();
        console.log("Computer score is " + computerCounter);
        console.log("User Score is " + userCounter)
        return 'You Lose! Paper beats Rock! 1 point for Computer';
    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            incrementComputerCount()
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Lose! Scissors beats Paper! 1 point for Computer';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            incrementComputerCount()
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Lose! Rock beats Scissors! 1 point for Computer';
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            incrementUsercount()
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Win! Rock beats Scissors! You receive 1 point';
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            incrementUsercount()
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Win! Paper beats Rock! You receive 1 point';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            incrementUsercount()
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Win! Scissors beats Paper! You receive 1 point';
        }
        else if (playerSelection === computerSelection) {
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return "It's a tie! No points"
        }
        
}

// create function to increment and total up the score count between user and computer
function incrementComputerCount() {
    computerCounter++;
}

function incrementUsercount() {
    userCounter++;
}

const playerSelection = prompt("Pick Rock, Paper, or Scissors")
console.log("You selected " + playerSelection.toLowerCase())
const computerSelection = getComputerChoice(options);
console.log(playRound(playerSelection, computerSelection))

function game() {
    
    // define the playerSelection and ComputerSelection variables again to ensure they're in
    // function scope of game()
    // Loop through the playRound() function 5 times
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice(options);
        console.log("You selected " + playerSelection.toLowerCase());
        console.log(playRound(playerSelection, computerSelection));
    }

    if (computerCounter > userCounter) {
        console.log("Computer won with a final score of " + computerCounter);
    }
        else {
            console.log("User won with a final score of " + userCounter);
    }   
    
}

game();