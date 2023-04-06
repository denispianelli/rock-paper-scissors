const buttons = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const newGameBtn = document.querySelector('#newGameBtn');
const choiceDiv = document.querySelector('#choice');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      result = "You Win! Rock beats Scissors";
      playerScore++;
    } else {
      result = "You Lose! Paper beats Rock";
      computerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You Win! Paper beats Rock";
      playerScore++;
    } else {
      result = "You Lose! Scissors beats Paper";
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You Lose! Rock beats Scissors";
      computerScore++;
    } else {
      result = "You Win! Scissors beats Paper";
      playerScore++;
    }
  } else {
    result = "Invalid input. Please select Rock, Paper, or Scissors.";
  }

  choiceDiv.textContent = `The computer has chosen ${computerSelection}`;
  resultDiv.textContent = result;
  scoreDiv.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultDiv.textContent = "You win the game!";
    } else {
      resultDiv.textContent = "Computer wins the game!";
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    newGameBtn.style.display = 'block';
  }
}

function newGame() {
  playerScore = 0;
  computerScore = 0;
  choiceDiv.textContent = '';
  resultDiv.textContent = '';
  scoreDiv.textContent = ``;
  newGameBtn.style.display = 'none';
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

newGameBtn.addEventListener('click', () => {
  newGame();
})
