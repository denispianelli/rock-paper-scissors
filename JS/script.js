function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
  
    if (lowerCasePlayerSelection === computerSelection) {
      return "It's a tie!";
    } else if (lowerCasePlayerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
      } else {
        return "You Lose! Paper beats Rock";
      }
    } else if (lowerCasePlayerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You Win! Paper beats Rock";
      } else {
        return "You Lose! Scissors beats Paper";
      }
    } else if (lowerCasePlayerSelection === "scissors") {
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
      } else {
        return "You Win! Scissors beats Paper";
      }
    } else {
      return "Invalid input. Please select Rock, Paper, or Scissors.";
    }
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt('Rock, Paper, Scissors?');
      let computerSelection = getComputerChoice();
  
      let roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes('Win')) {
        playerScore++;
      } else if (roundResult.includes('Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You won the game!');
    } else if (playerScore < computerScore) {
      console.log('You lost the game!');
    } else {
      console.log('It was a tie!');
    }
  }
  
  game()