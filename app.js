let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function computerPlay() {
    let allChoices = ["rock", "paper", "scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice
} 

//Plays one round of RPS
function playRound(playerChoice) {
  const computerSelection = computerPlay();
  let roundResult;
  
  if (playerChoice === computerSelection) {
    roundResult = "draw";
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    roundResult = "playerWin";
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    roundResult = "playerWin";
  } else if (playerChoice === "scissors" && computerSelection === "paper") {
    roundResult = "playerWin";
  } else {
    roundResult = "computerWin";
  }

  if (roundResult === "draw") {
    resultsBox.textContent = "It's a draw!";
  } else if (roundResult === "playerWin") {
    playerScore++;
    resultsBox.textContent = `You win this round!`;
  } else {
    computerScore++;
    resultsBox.textContent = `Computer wins this round!`;
  }
  
  currentPlayer.textContent = `Your score: ${playerScore}`;
  currentComp.textContent = `Computer score: ${computerScore}`;
  
  if (playerScore === winningScore) {
    resultsBox.textContent = "Congratulations, you won the game! Click again to play a new game.";
    disableButtons();
  } else if (computerScore === winningScore) {
    resultsBox.textContent = "Sorry, you lost the game. Click again to play a new game.";
    disableButtons();
  } else {
    resultsBox.textContent += " Make another move to play again.";
  }

  if (playerScore === winningScore || computerScore === winningScore) {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playerScore = 0;
    computerScore = 0;
  }
}


function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultsBox = document.querySelector(".results");
const currentPlayer = document.querySelector(".currentPlayer");
const currentComp = document.querySelector(".currentComputer");

rock.addEventListener('click', () => {
  playRound('rock');
});

paper.addEventListener('click', () => {
  playRound('paper');
});

scissors.addEventListener('click', () => {
  playRound('scissors');
});
