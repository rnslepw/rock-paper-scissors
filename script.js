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

function updateComputerChoice(computerChoice) {
  const compChoice = document.querySelector('.compChoice')
  compChoice.textContent = computerChoice[0].toUpperCase() + computerChoice.slice(1);
}

function playRound(humanChoice, computerChoice) {
  updateComputerChoice(computerChoice);

  const result = document.querySelector('.result');
  
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      result.textContent = "You lose! Paper beats rock";
      computerScore++;
    } else if (computerChoice === "scissors") {
      result.textContent = "You won! Rock beats scissors";
      humanScore++;
    } else {
      result.textContent = "It's a draw. Try again!";
    }
  } else if (humanChoice === 'paper') {
      if (computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beats paper";
        computerScore++;
      } else if (computerChoice === "rock") {
        result.textContent = "You won! Paper beats scissors";
        humanScore++;
      } else {
        result.textContent = "It's a draw. Try again!";
      }
  } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        result.textContent = "You lose! Rock beats scissors";
        computerScore++;
      } else if (computerChoice === "paper") {
        result.textContent = "You won! Scissors beats paper";
        humanScore++;
      } else {
        result.textContent = "It's a draw. Try again!";
      }
  }
}

function hideButtons() {
  const btns = document.querySelectorAll('button');
  btns.forEach(btn => {
    btn.style.display = "none";
  });
}

function updateScoresheet(humanScore, computerScore) {
  const scoresheet = document.querySelector('.scoresheet');
  scoresheet.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

  if (humanScore >= 5) {
    scoresheet.textContent = "You won!";
    hideButtons();
  } else if (computerScore >= 5) {
    scoresheet.textContent = "Computer won(";
    hideButtons();
  }
}

let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll("button");

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    updateScoresheet(humanScore, computerScore);
  })
})


