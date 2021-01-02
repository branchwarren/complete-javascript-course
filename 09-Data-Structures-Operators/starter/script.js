'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// The Nullish coalescing operator (the short circuit doesn't work in this case)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuit evaluation
// It returns the first Truthy value and don't evaluate the following ones
console.log(3 || 'Jonas'); // => 3
console.log('' || 'Jonas'); // => 'Jonas'
console.log(true || 0); // => true
console.log(undefined || null); // => null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // => 'Hello'

// restaurant.numGuests = 23;
// These two forms...
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// ...are equivalent
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// This stops the evaluation when finds the first Falsy value
console.log('---- AND ----');
console.log(0 && 'Jonas'); // => 0
console.log(7 && 'Jonas'); // => 'Jonas'

console.log('Hello' && 23 && null && 'Jonas'); // => null

// Practical example: call a method only if it exists
// Solution 1
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// Solution 2
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// Destructuring objects (variable name is the same of the object property)
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Destructuring objects (renaming properties)
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Destructuring objects (renaming properties and default values)
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects and renaming properties
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Destructuring array
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(arr, a, b, c);

// this is equivalent to the previous code
// const [x, y, z] = arr;
// console.log(arr, x, y, z);

// skipping array items
// const [first, , secondary] = restaurant.categories;
// console.log(first, secondary);

// switching variables...
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//...trivial solution with temporary variable...
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//...smart solution with array destructuring and NO explicit temporary variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Returning multiple values from functions
// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// The spread operator: to expand an array in its single items
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr); // print the array as structure
// console.log(...newArr); // print the single items of the array

// extend an existing array with spread operator
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// Copy array (shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuJoin);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(str);
// console.log(`${...str} Schmedtmann`); it doesn't work script.js:153 Uncaught SyntaxError: Unexpected token '...'

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Extend objects with spread operator
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Giuseppe',
// };
// console.log(newRestaurant);

// copy objects (shallow copy)
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// 1) Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
