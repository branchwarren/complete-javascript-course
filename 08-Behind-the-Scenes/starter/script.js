'use strict';

// console.log(this); // 'window' object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991); // undefined

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1978); // 'window' object

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); // this = jonas

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // this = matilda

// const f = jonas.calcAge;
// in this case 'this' = 'undefined', so...
// f(); script.js:21 Uncaught TypeError: Cannot read property 'year' of undefined

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self OR that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet(); // print 'Hey Matilda'
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); // this keyword/object exists always in regular functions
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // it's perfectly legal!

var addArrow = (a, b) => {
  console.log(arguments); // this gets a 'script.js:77 Uncaught ReferenceError: arguments is not defined'
  return a + b;
};
addArrow(2, 5, 8);
