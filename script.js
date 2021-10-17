let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;

// winner logic and #results div setup.
function playRound(playerSelection, computerSelection) {
  if (playerScore >= 5) {
    results.textContent = 'You win! Congratulations!';
  } else if (computerScore >= 5) {
    results.textContent = 'You lose. Try again.';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    results.textContent = 'You lose! paper beats rock.';
    computerScore += 1;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    results.textContent = 'You win! rock beats scissors.';
    playerScore += 1;
  } else if (
    (playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'scissors' && computerSelection == 'scissors')
  ) {
    results.textContent = "I'ts a draw!";
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    results.textContent = 'You win! Paper beats rock';
    playerScore += 1;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    results.textContent = 'You lose! scissors beats paper.';
    computerScore += 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    results.textContent = 'You lose! Rock beats scissors.';
    computerScore += 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    results.textContent = 'You win! Scissors beats paper!';
    playerScore += 1;
  } else results.textContent = 'something wrong';
  console.log(playerScore);
}
// pick random option for computer
function computerPlay() {
  let decidingNumber;
  decidingNumber = Math.floor(Math.random() * 3);
  if (decidingNumber == 0) {
    return (computerSelection = 'scissors');
  } else if (decidingNumber == 1) {
    return (computerSelection = 'rock');
  } else if (decidingNumber == 2) {
    return (computerSelection = 'paper');
  } else {
    console.log('something wrong!');
  }
}
// prompt players weapon choice
function pickWeapon() {
  playerSelection = prompt('Choose your weapon!');
  return playerSelection;
}
// play a round of game including collect required info
function game() {
  computerPlay();
  pickWeapon();
  playRound(playerSelection, computerSelection);
  console.log(
    'computer score: ' + computerScore + ' player score: ' + playerScore
  );
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
  computerPlay(computerSelection);
  playRound('rock', computerSelection);
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
  computerPlay(computerSelection);
  playRound('paper', computerSelection);
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
  computerPlay(computerSelection);
  playRound('scissors', computerSelection);
});

const results = document.querySelector('#results');
results.textContent = 'Fight!';
results.append;

const score = document.querySelector('#score');
score.textContent =
  playerScore + ' <player score:computer score> ' + computerScore;
score.append;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    score.textContent =
      playerScore + ' <player score:computer score> ' + computerScore;
  })
);
