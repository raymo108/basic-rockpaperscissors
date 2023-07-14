// create an array to store the random choice from computerChoice
const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(options) {      // Create a function called getComputerChoice
    let computerChoice = Math.floor(Math.random() * options.length); // Pick a random index in the array of options
    return options[computerChoice]; // return the element within the generated index
}
    

// assign and call the function 'getComputerChoice' to randomChoice to output the random choice with console.log
let randomChoice = getComputerChoice(options)
console.log(randomChoice)