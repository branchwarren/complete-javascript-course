'use strict';
// Start of TDZ - Temporal Dead Zone (for variables and functions)
console.log(me); // undefined
// console.log(job); // script.js:4 Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // script.js:5 Uncaught ReferenceError: Cannot access 'year' before initialization
// End of TDZ (for variables)
// Variables
var me = 'Joinas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); script.js:13 Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); script.js:14 Uncaught ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addExprVar(2, 3)); Uncaught TypeError: addExprVar is not a function
console.log(addExprVar); // undefined
// console.log(addArrowVar(2, 3)); Uncaught TypeError: addArrowVar is not a function
console.log(addArrowVar); // undefined
// End of TDZ (for variables)
// Functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
  return a + b;
};

var addArrowVar = (a, b) => a + b;

// Example
console.log(numProducts);
// this triggers the function because numProducts = undefined before the declaration with 'var'
// and 'undefined' is Falsy, so !undefined = true...
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
