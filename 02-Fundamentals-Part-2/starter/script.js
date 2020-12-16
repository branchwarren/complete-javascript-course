'use strict'

/* 
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percCountry1 = percentageOfWorld1(60.36);
const percCountry2 = percentageOfWorld1(47.43);
const percCountry3 = percentageOfWorld1(83.02);
console.log(percCountry1, percCountry2, percCountry3);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percCountry12 = percentageOfWorld2(60.36);
const percCountry22 = percentageOfWorld2(47.43);
const percCountry32 = percentageOfWorld2(83.02);
console.log(percCountry12, percCountry22, percCountry32);

const percentageOfWorld3 = population => population / 7900 * 100;

const percCountry13 = percentageOfWorld3(60.36);
const percCountry23 = percentageOfWorld3(47.43);
const percCountry33 = percentageOfWorld3(83.02);
console.log(percCountry13, percCountry23, percCountry33);