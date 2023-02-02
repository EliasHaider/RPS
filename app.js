let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Computer choice
function computerPlay() {
    let allChoices = ["rock", "paper", "scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice
} 
let choosyyy = "rock"
//Plays one round of RPS
function playRound(playerChoice, computerSelection) {
  if (playerChoice === computerSelection) {
    return draw;
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    return playerWinRound;

  } else if (playerChoice === "paper" && computerSelection === "rock") {
    return playerWinRound;

  } else if (playerChoice === "scissors" && computerSelection === "paper") {
    return playerWinRound;

  } else {
    return computerWinRound;

  }
}

let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

for (let i = 0; i < 1000; i++) {
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerChoice, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
  
    if (playerScore === 5 || computerScore === 5) {
      break;
    }
  }

  function gameScore(result) {
  
    if (result === playerWinRound) {
      playerScore++;
    } else if (result === draw) {
      draws++;
    } else {
      computerScore++;
    }
  
  
    if (playerScore === 5) {
      console.log(playerWin);
      return;
    }
    if (computerScore === 5) {
      console.log(computerWin);
      return;
    }
  }