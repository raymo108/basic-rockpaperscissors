// create an array to store the random choice from computerChoice
const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {      // Create a function called getComputerChoice
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomIndex];
    return computerSelection;
}

let userCounter = 0;
let computerCounter = 0;

function addtoUserCounter() {
    userCounter++
}
function addtoComputerCounter () {
    computerCounter++
}

const container = document.querySelector('#results');

function playRound(playerSelection,computerSelection) {
    const content = document.createElement('div');
    content.classList.add('content');
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        addtoComputerCounter()
        content.textContent =  'You chose rock and computer chose paper. You lose! Paper beats rock. Computer Score: ' + computerCounter  + ' User Score: ' + userCounter;    
    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            addtoComputerCounter()
            content.textContent = 'You chose paper and computer chose scissors. You lose! scissors beats paper. Computer Score: ' + computerCounter + ' User score: ' + userCounter;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            addtoComputerCounter()
            content.textContent =  'You chose scissors and computer chose rock. You lose! rock beats scissors. Computer Score: ' + computerCounter + ' User score: ' + userCounter;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            addtoUserCounter()
            content.textContent =  'You chose rock and computer chose scissors. You win! rock beats scissors. Computer score: ' + computerCounter + ' User score: ' + userCounter;
        }
        else if (playerSelection ==='paper' && computerSelection ==='rock') {
            addtoUserCounter()
            content.textContent =  'You chose paper and computer chose rock. You win! paper beats rock. Computer score: ' + computerCounter + ' User Score: ' + userCounter;
        }
        else if (playerSelection ==='scissors' && computerSelection === 'paper') {
            addtoUserCounter()
            content.textContent =  'You chose scissors and computer chose paper. You win! scissors beats paper. Computer Score: ' + computerCounter + ' User score: ' + userCounter;
        }
        else if (playerSelection === computerSelection) {
            content.textContent = "It's a tie! No points awarded. Computer score: " + computerCounter + ' User score: ' + userCounter;
        }
        results.appendChild(content);
}

const button = document.createElement('div');
button.style.backgroundColor = 'yellow'
button.style.fontSize = '32px'

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    if (userCounter === 5) {
        button.textContent = 'User Wins with a final score of ' + userCounter; 
    }
        else if (computerCounter === 5) {
            button.textContent = 'Computer wins with a final score of ' + computerCounter;
        }
        else {
            playerSelection = 'rock';
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
});

paperButton.addEventListener('click', () => {
    if (userCounter === 5) {
        button.textContent = 'User Wins with a final score of ' + userCounter; 
    }
        else if (computerCounter === 5) {
            button.textContent = 'Computer wins with a final score of ' + computerCounter;
        }
        else {
            playerSelection = 'paper';
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
});

scissorsButton.addEventListener('click', () => {
    if (userCounter === 5) {
        button.textContent = 'User Wins with a final score of ' + userCounter; 
    }
        else if (computerCounter === 5) {
            button.textContent = 'Computer wins with a final score of ' + computerCounter;
        }
        else {
            playerSelection = 'scissors';
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
    
});

results.appendChild(button);

