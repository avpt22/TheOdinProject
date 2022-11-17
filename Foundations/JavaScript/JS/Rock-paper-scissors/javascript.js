

const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay () {
        let computerChoice = Math.floor(Math.random() * choices.length);
        if (computerChoice === 0) {
            return "rock";
        }
        if (computerChoice === 1) {
            return "paper";
        }
        if (computerChoice === 2) {
            return "scissors";
        }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "That's a tie.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors."; 
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper.";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper.";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "You beat the computer!";
    }
    else if (playerScore < computerScore) {
        return "You lost to the computer!";
    }
    else {
        return "It's a tie."
    }
}

console.log(game());