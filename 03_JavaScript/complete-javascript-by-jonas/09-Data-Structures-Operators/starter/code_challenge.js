'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

let { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);

const printGoals = function (...player) {
  console.log(...player);
  console.log(`${player.length} total goal scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log(' team 1 is win the game');
team1 > team2 && console.log(' team 2 is win the game');

for (const players123 of players1) {
  console.log(players123);
}

// to access player index use entry method
for (const [index, name] of players1.entries()) {
  console.log(index + '.' + name);
}

//1 Print each scored eg.Goal 1: Lewandowski

for (const [index, scorers] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${scorers}`);
}

const odds = Object.values(game.odds);
let score = 0;
for (const values of odds) {
  //console.log(values);
  score += values;
}

score /= odds.length;
console.log(score);

console.log(`Odd of victory ${game.team1} : ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2} : ${game.odds.team2}`);

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = new Set(gameEvents.values());
console.log(events);

// Removing card
console.log(gameEvents.delete(64));
console.log(gameEvents);

for (const [key, allevents] of gameEvents) {
  const half = key <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${key}: ${allevents}`);
}

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Upper and Lower case

let naame = 'akshay';
naame.toUpperCase(); // This changes not applied on existing string

console.log(naame.toUpperCase());
console.log(naame.toLowerCase());

//How to upper case first later
console.log(naame[0].toUpperCase() + naame.slice(1));
console.log(naame.replace(naame[0], naame[0].toUpperCase()));

//trim

// Trim the email and paragraph space

let email = ' hello@ jonas .com   ';

console.log(email.trim());
console.log(email.trimStart().trimEnd().replace(/ /g, ''));

const value = '222,43$';

console.log(value.replace('$', '').replace(',', ''));

const methodCreator = function (textarea) {
  const newLineArray = textarea.split('\n');
  console.log(newLineArray);
  for (const [index, str] of newLineArray.entries()) {
    const [first, second] = str.trim().toLowerCase().split('_');
    // //console.log(first, second);
    // const word1 = first.trim().toLowerCase();
    // const word2 = second.trim().toLowerCase();
    const correctMethod =
      first + second.replace(second[0], second[0].toUpperCase());

    console.log(correctMethod.padEnd('20', ' ') + '✅'.repeat(index + 1));
  }
};

const test21 = `underscore_case 
first_name
Some_Variable 
 calculate_AGE
delayed_departur`;
//methodCreator(test21);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const test212 = document.querySelector('textarea').value;
  console.log(test212);
  methodCreator(test212);
});
