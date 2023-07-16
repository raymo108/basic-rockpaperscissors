// create an array to store the random choice from computerChoice
const options = ['rock', 'paper', 'scissors']

function getComputerChoice(options) {      // Create a function called getComputerChoice
    const computerChoice = Math.floor(Math.random() * options.length); // Pick a random index in the array of options
    return options[computerChoice]; // return the element within the generated index

}

function playRound (playerSelection, computerSelection) {
    // convert playerSelection to lowercase no matter what for case-sensitivty
    playerSelection = playerSelection.toLowerCase();
    console.log("Computer selected " + computerSelection);
  
    
    let computerCounter = 0;
    let userCounter = 0;
 
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerCounter++;
        console.log("Computer score is " + computerCounter);
        console.log("User Score is " + userCounter)
        return 'You Lose! Paper beats Rock! 1 point for Computer';
    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerCounter++
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Lose! Scissors beats Paper! 1 point for Computer';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerCounter++
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Lose! Rock beats Scissors! 1 point for Computer';
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            userCounter++
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Win! Rock beats Scissors! You receive 1 point';
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            userCounter++
            console.log("Computer score is " + computerCounter);
            console.log("User Score is " + userCounter)
            return 'You Win! Paper beats Rock! You receive 1 point';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            userCounter++
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


const playerSelection = prompt("Pick Rock, Paper, or Scissors")
console.log("You selected " + playerSelection.toLowerCase())
const computerSelection = getComputerChoice(options);
console.log(playRound(playerSelection, computerSelection))

function game() {
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}

game();