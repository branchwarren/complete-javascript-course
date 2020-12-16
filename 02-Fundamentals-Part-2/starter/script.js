'use strict'

/* 
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
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