// create an array to store the random choice from computerChoice
const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(options) {      // Create a function called getComputerChoice
    let computerChoice = Math.floor(Math.random() * options.length); // Pick a random index in the array of options
    return options[computerChoice]; // return the element within the generated index
}
    

// assign and call the function 'getComputerChoice' to randomChoice to output the random choice with console.log
let randomChoice = getComputerChoice(options)
console.log(randomChoice)


function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock!';
    }
        else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            return 'You Lose! Paper beats Rock!';
        }
        else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            return 'You Lose! Paper beats Rock!';
        }
        else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            return 'You Win! Rock beats Scissors';
        }
        else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock';
        }
        else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return 'You Win! Scissors beats Paper';
        }
        else if (playerSelection === computerSelection) {
            return "It's a tie!"
        }
}

let playerSelection = 'Scissors'
let computerSelection = randomChoice
console.log(playRound(playerSelection, computerSelection))