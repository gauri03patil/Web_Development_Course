'use strict';

let player0EL = document.querySelector('.player--0');
let player1EL = document.querySelector('.player--1');
let score0EL = document.getElementById('score--0');
let score1EL = document.getElementById('score--1');
let currenScore0EL = document.getElementById('current--0');
let currenScore1EL = document.getElementById('current--1');
let diceEL = document.querySelector('.dice');
let btnNewGame = document.querySelector('.btn--new');
let btnRollDice = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let currentScore, score, activePlayer, playing;

//Initialization
const init = function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currenScore0EL.textContent = 0;
  currenScore1EL.textContent = 0;
  currentScore = 0;
  score = [0, 0];
  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  activePlayer = 0;
  playing = true;
};

init(); // Calling initalization method

//Switch the player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRollDice.addEventListener('click', function () {
  if (playing) {
    // 1.Generate Random Number
    const dice = Math.trunc(Math.random() * 6 + 1);

    //2. Display dice Roll
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //3. Check Dice is 1
    //4.if not then add score to current score
    //5. Display the current Score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch the Player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add Current score to Player Score
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2. Check score> =100
    if (score[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
