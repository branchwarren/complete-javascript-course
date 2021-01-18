'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// 155.
// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // to reset the focus on this control

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI (do logout)
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';

  console.log(accounts);
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 140.
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE: it does not change the original array
// console.log(arr.slice(2)); // returns ["c", "d", "e"]
// console.log(arr.slice(2, 4)); // returns ["c", "d"]
// console.log(arr.slice(-2)); // returns ["d", "e"]
// console.log(arr.slice(-1)); // // returns ["e"]
// console.log(arr.slice(1, -2)); // returns ["b", "c"]
// console.log(arr.slice()); // returns ["a", "b", "c", "d", "e"] (copy array)
// console.log([...arr]); // another way to copy an array

// SPLICE: it mutates the original array
// console.log(arr.splice(2));
// console.log(arr); // we see that it mutates the array
// a typical usage is to remove the last element of the array
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // a bit different from slice: here the first is the start index, but the second is the number of chars
// console.log(arr);

// REVERSE: it mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2); // the same as the previous one

// JOIN
// console.log(letters.join(' - '));

// 141.
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// forEach does not allow 'continue' and 'break' statement!
// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// 142.
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Coding Challenge #1
// const juliaData1 = [3, 5, 2, 12, 7];
// const kateData1 = [4, 1, 15, 8, 3];
// const juliaData2 = [9, 16, 6, 8, 3];
// const kateData2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice();
//   console.log(dogsJulia);
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   console.log(dogsJuliaCopy);
//   const mergedArray = dogsJuliaCopy.concat(dogsKate);
//   console.log(mergedArray);
//   mergedArray.forEach(function (dog, i) {
//     const str =
//       dog >= 3
//         ? ` is an adult, and is ${dog} years old`
//         : ' is still a puppy 🐶';
//     console.log(`Dog number ${i + 1}${str}`);
//   });
// };
// checkDogs(juliaData1, kateData1);
// checkDogs(juliaData2, kateData2);

// 147.
/*
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


// 149.
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawals);

// 150.
// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum value

const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);
console.log(movements);
console.log(max);

*/

// Assignment 2
// Test data:
// Data 1: [5, 2, 4, 1, 15, 8, 3]
// Data 2: [16, 6, 10, 5, 6, 1, 4]
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log('****HUMAN AGES****');
  console.log(ages);
  console.log(humanAges);
  const filteredHumanAges = humanAges.filter(humanAge => humanAge >= 18);
  console.log('****FILTERED HUMAN AGES****');
  console.log(filteredHumanAges);
  const averageHumanAge =
    filteredHumanAges.reduce((acc, a) => (acc += a), 0) /
    filteredHumanAges.length;
  console.log('****AVERAGE HUMAN AGES****');
  console.log(averageHumanAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge2 = ages => {
  return ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, a, undefined, arr) => acc + a / arr.length, 0);
};
console.log(
  `Average human age of set 1: ${calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])}`
);
console.log(
  `Average human age of set 2: ${calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4])}`
);
*/

// 152.
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// Assignment 3
// Test data:
// Data 1: [5, 2, 4, 1, 15, 8, 3]
// Data 2: [16, 6, 10, 5, 6, 1, 4]
// const calcAverageHumanAge = ages => {
//   return ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, a, undefined, arr) => acc + a / arr.length, 0);
// };
// console.log(
//   `Average human age of set 1: ${calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])}`
// );
// console.log(
//   `Average human age of set 2: ${calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])}`
// );

// 154.
// The find method is similar to filter method, but compared to it this one
// retrieves only the first match and returns it as result, instead filter returns
// an array with all the matches.
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const accountFor = accounts => {
  for (const account of accounts) {
    if (account.owner === 'Jessica Davis') {
      return account;
    }
  }
  return null;
};
console.log(accountFor(accounts));
*/

/*
// 158. some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
// 159. flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// arr.flat(1) === arr.flat()
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/

/*
// 160. Sorting Arrays
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // Pay attention! It mutates the array.
console.log(owners);

// Numbers
console.log(movements);

// return < 0 A, B (keep order)
// return > 0 B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
// 161.
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array([1, 2, 3, 4, 5, 6, 7])); // this is equivalent to the previous one

const x = new Array(7); // this creates an array with length = 7, but with no items
console.log(x);
// console.log(x.map(() => 5)); // this has not effects on the array
// x.fill(1); // this fill all the 7 slots with 1
// x.fill(1, 3); // this fill the array with 1 starting from the third slot
x.fill(1, 3, 5); // this fill the array with 1 from the third position to the fifth position excluded
console.log(x);

// we can also mutate an existing pre-filled array:
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1); // it creates and fill with 1 an array with length = 7
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1); // it's equivalent to a map
// const z = Array.from({ length: 7 }, (_, i) => i + 1); // we can also write this
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  // as alternative we can use the spread operator, but we have to map externally
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/

// Assignment4.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
console.log(
  dogs
    .filter(dog => dog.owners.includes('Sarah'))
    .map(dog =>
      dog.curFood >= dog.recommendedFood * 1.1
        ? `Sarah's dog is eating too much (${dog.curFood} vs ${dog.recommendedFood})`
        : dog.curFood <= dog.recommendedFood * 0.9
        ? `Sarah's dog ${dog} is eating too little (${dog.curFood} vs ${dog.recommendedFood})`
        : `Sarah's dog ${dog} is eating OK (${dog.curFood} vs ${dog.recommendedFood})`
    )
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(ownersEatTooMuch.join(' and ') + `'s dogs eat too much!`);
console.log(ownersEatTooLittle.join(' and ') + `'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingOk = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

// 6.
console.log(dogs.some(checkEatingOk));

// 7.
const dogsEatRightAmount = dogs.filter(checkEatingOk);
console.log(dogsEatRightAmount);

// 8.
// Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
const orderedArray = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(orderedArray);
