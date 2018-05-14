var choices = ['rock', 'paper', 'scissors'];
var myChoice = null;
var wins = 0
var losses = 0
var ties = 0


document.getElementById('rock').addEventListener("click", selectRock);
document.getElementById('paper').addEventListener("click", selectPaper);
document.getElementById('scissors').addEventListener("click", selectScissors);
document.getElementById('centerButton').addEventListener("click", pickRandom);

function selectRock() {
  document.getElementById('compChoice').innerHTML = " "
  document.getElementById('winOrLose').innerHTML = " "
  myChoice = 'rock';
  document.getElementById('selection').innerHTML = "You have chosen Rock"
}
function selectPaper() {
  document.getElementById('compChoice').innerHTML = " "
  document.getElementById('winOrLose').innerHTML = " "
  myChoice = 'paper'
  document.getElementById('selection').innerHTML = "You have chosen Paper"

}
function selectScissors() {
  document.getElementById('compChoice').innerHTML = " "
  document.getElementById('winOrLose').innerHTML = " "
  myChoice = 'scissors'
  document.getElementById('selection').innerHTML = "You have chosen Scissors"

}

function pickRandom() {
  if (myChoice == null){
    document.getElementById('selection').innerHTML = "Please choose before you play"
    return null
  }
  var rand = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('compChoice').innerHTML = "The computer has chosen " + rand
  playGame(rand);
}

function playGame(rand) {
  if (myChoice == rand) {
    document.getElementById("winOrLose").innerHTML = "It's a tie!"
    ties++
    document.getElementById("ties").innerHTML = "Ties: " + ties
  } else if (myChoice == 'rock') {
    if (rand == 'scissors') {
      document.getElementById("winOrLose").innerHTML = "You win!"
      wins++
      document.getElementById("wins").innerHTML = "Wins: " + wins
    } else {
      document.getElementById("winOrLose").innerHTML = "You lose!"
      losses++
      document.getElementById("losses").innerHTML = "Losses: " + losses
    }
  } else if (myChoice == 'paper') {
    if (rand == 'scissors') {
      document.getElementById("winOrLose").innerHTML = "You lose!"
      losses++
      document.getElementById("losses").innerHTML = "Losses: " + losses

    } else {
      document.getElementById("winOrLose").innerHTML = "You win!"
      wins++
      document.getElementById("wins").innerHTML = "Wins: " + wins
    }
  } else {
    if (rand == 'paper') {
      document.getElementById("winOrLose").innerHTML = "You win!"
      wins++
      document.getElementById("wins").innerHTML = "Wins: " + wins
    } else {
      document.getElementById("winOrLose").innerHTML = "You lose!"
      losses++
      document.getElementById("losses").innerHTML = "Losses: " + losses

    }

  }
}