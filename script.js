// lowercase playerSelection and find out the winner and console.log it.
function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == "rock") && (computerSelection == "paper")) {
        console.log("You lose! paper beats rock.");
        computerScore += 1;
    }
    else if 
        ((playerSelection == "rock") && (computerSelection == "scissors")) {
            console.log("You win! rock beats scissors.");
            playerScore += 1;
    }
    else if
        (((playerSelection == "rock") && (computerSelection == "rock")) || 
        ((playerSelection == "paper") && (computerSelection == "paper")) ||
        ((playerSelection == "scissors") && (computerSelection == "scissors"))){
            console.log("I'ts a draw!");
        }
    else if
        ((playerSelection == "paper") && (computerSelection == "rock")) {
            console.log("You win! Paper beats rock");
            playerScore += 1;
        }
    else if
        ((playerSelection == "paper") && (computerSelection == "scissors")) {
            console.log("You lose! scissors beats paper.");
            computerScore += 1;
        }
    else if
        ((playerSelection == "scissors") && (computerSelection == "rock")) {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        }

    else if
        ((playerSelection == "scissors") && (computerSelection == "paper")) {
            console.log("You win! Scissors beats paper!");
            playerScore += 1;
        }
    else console.log("something wrong");
    } ;
// pick random option for computer
function computerPlay() {
 let decidingNumber;
 decidingNumber = Math.floor(Math.random() * 3);
   if (decidingNumber == 0) {
       return computerSelection = "scissors";
   } else if (decidingNumber == 1) {
       return computerSelection = "rock" ;
   } else if (decidingNumber == 2) {
       return computerSelection = "paper" ;
   } else {
       console.log("something wrong!");
   }
   
}
// prompt players weapon choice
function pickWeapon() {
    playerSelection = prompt("Choose your weapon!");
    return playerSelection;
}
// play a round of game including collect required info
function game(){
    computerPlay();
    pickWeapon();
    playRound(playerSelection, computerSelection);
    console.log("computer score: " + computerScore + " player score: " + playerScore);

}

let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;


// computerPlay();
// pickWeapon();
// playRound(playerSelection, computerSelection);
// console.log(playerSelection, computerSelection);
// console.log("computer score:" + computerScore + "player score" + playerScore);



game(); game(); game(); game(); game(); 