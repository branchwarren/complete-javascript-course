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

// 1.
for (const [i, el] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${el}`);

// 2.
let sum = 0;
for (const [i, el] of Object.values(game.odds).entries()) {
  sum = sum + el;
}
console.log((sum / Object.values(game.odds).length).toFixed(2) || 1);

// 3.
for (const [i, el] of Object.keys(game.odds).entries()) {
  const team = game[el];
  console.log(
    `Odd of ${team ? 'victory ' : ''}${team ?? 'draft'}: ${
      Object.values(game.odds)[i]
    }`
  );
}

// 4. BONUS
const scorers = {};
for (const item of game.scored) scorers[item] = 0;
for (const item of game.scored) scorers[item]++;
console.log(scorers);

// const scorers = {
//   [game.scored[0]]: 0,
//   [game.scored[1]]: 0,
//   [game.scored[2]]: 0,
//   [game.scored[3]]: 0,
// };
// for (const item of game.scored) {
//   scorers[item] += 1;
// }
// console.log(scorers);
