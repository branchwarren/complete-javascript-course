'use strict';

// 135. Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// 136. More Closiures examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000; To check that closure has priority over scope chain
boardPassengers(180, 3);

// 134. IFFE - Immediately Invoked Function Expressions
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// IFFE
// (function () {
//   console.log('This will never run again');
//   const iPrivate = 23;
// })();

// console.log(isPrivate); ERROR: Uncaught ReferenceError: isPrivate is not defined

// (() => console.log('This will never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(isPrivate);
// console.log(notPrivate);

// 131. The call and apply method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book : function() {} it's the same
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// This does NOT work
// book(23, 'Sarah Williams');

// A. Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// B. Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// ...or a newer...
// book.call(swiss, ...flightData);
// console.log(swiss);

// 132. The Bind method
// const bookEW = book.bind(eurowings); // it returns a function
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// ...but we can bind more arguments!
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');
// console.log(eurowings);

// With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// this fails because 'this' is equal to the button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// instead this works because we invoke it on the object
// lufthansa.buyPlane();
// so to get a correct event handler...
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// we are not interested in the 'this' object, we want hardcoding a parameter
// const addVAT = addTax.bind(null, 0.23);
// it's the same of...
// addVAT = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTax2 = rate => value => value + value * rate;
// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(500));
// console.log(addVAT2(120));

// 130. Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// this is a function now...
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// ...but also...
// greet('Hello')('Jonas');

// with the arrow notation
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Ciao')('Ale');

// 129. Functions accepting callback functions
// const oneWord = function (str) {
//   str?.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// 127. Passing arguments value Vs reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 23423525252342,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23423525252342) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// it's the same as doing
// const flightNum = flight; by value
// const passenger = jonas; by value a reference

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(jonas); // this modifies the object with the consequence that...
// checkIn(flight, jonas); // ... the checkin fails!

// 126. Default parameters
// const bookings = [];

// NEW ES6
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,;
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // workaround to SKIP one or more parameters
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);

// OLD ES5
// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
