function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Choose between Rock, Paper and Scissors");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
  
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
      } else if (computerChoice === "scissors") {
        console.log("You won! Rock beats scissors");
        humanScore++;
      } else {
        console.log("It's a draw. Try again!");
      }
    } else if (humanChoice === 'paper') {
        if (computerChoice === "scissors") {
          console.log("You lose! Scissors beats paper");
          computerScore++;
        } else if (computerChoice === "rock") {
          console.log("You won! Paper beats scissors");
          humanScore++;
        } else {
          console.log("It's a draw. Try again!");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
          console.log("You lose! Rock beats scissors");
          computerScore++;
        } else if (computerChoice === "paper") {
          console.log("You won! Scissors beats paper");
          humanScore++;
        } else {
          console.log("It's a draw. Try again!");
        }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
}

playGame()


