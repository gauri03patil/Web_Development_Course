'use strict';

// document.querySelector('.message').textContent = '😍Correct Number🥳';
// console.log(document.querySelector('.message').textContent);

// let userNumber = Number((document.querySelector('.guess').value = 23));
// console.log(typeof userNumber, userNumber);

// Default Score
let score = Number(document.querySelector('.score').textContent);
console.log(score);

// Default Highest Score
let highscore = Number(document.querySelector('.highscore').textContent);
console.log(highscore);

//Generate random number between 1 to 20
let guessMyNumber;

function randomNumberGenerator() {
  guessMyNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
}

randomNumberGenerator();

// Check Coorect Number
document.querySelector('.check').addEventListener('click', function () {
  let userNumber = Number(document.querySelector('.guess').value);
  guessMyLuck(userNumber);
});

// Rest the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  randomNumberGenerator();
  guessingMessage('Start Guessing......');
});

// Guess number Function
function guessMyLuck(number) {
  if (!number) {
    let message = `⛔ Not a correct number`;
    guessingMessage(message);
    decreaseScore();
  } else if (number === guessMyNumber) {
    guessingMessage('😍Correct Number🥳');
    document.querySelector('.number').textContent = guessMyNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highestScore();
  }
  // else if (number > guessMyNumber) {
  //   guessingMessage('Number Too High 📈');
  //   decreaseScore();
  // } else if (number < guessMyNumber) {
  //   guessingMessage('Number Too Low 📉');
  //   decreaseScore();
  // }
  else if (number != guessMyNumber) {
    guessingMessage(
      number > guessMyNumber ? 'Number Too High 📈' : 'Number Too Low 📉'
    );
    decreaseScore();
  }
}

// Message
function guessingMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Decrease Score
function decreaseScore() {
  if (score > 0) {
    score--; // score -- or score -=1
    document.querySelector('.score').textContent = score;
  } else {
    guessingMessage('You lost the game 😔💔');
  }
}

function highestScore() {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
}
