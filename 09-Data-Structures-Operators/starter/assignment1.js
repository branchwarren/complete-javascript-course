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

  printGoals: function (...goleadors) {
    for (let i = 0; i < goleadors.length; i++) {
      console.log(`${goleadors[i]} got ${i} goals`);
    }
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
// const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
// const [...allPlayers] = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const [...players1Final] = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals('Davies', 'Muller', 'Lewandowski');
game.printGoals('Davies', 'Muller');
game.printGoals('Davies');
game.printGoals();
game.printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
