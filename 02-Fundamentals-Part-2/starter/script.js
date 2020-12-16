'use strict'

/* 
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percCountry1 = percentageOfWorld1(60.36);
const percCountry2 = percentageOfWorld1(47.43);
const percCountry3 = percentageOfWorld1(83.02);
// console.log(percCountry1, percCountry2, percCountry3);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percCountry12 = percentageOfWorld2(60.36);
const percCountry22 = percentageOfWorld2(47.43);
const percCountry32 = percentageOfWorld2(83.02);
// console.log(percCountry12, percCountry22, percCountry32);

const percentageOfWorld3 = population => population / 7900 * 100;

const percCountry13 = percentageOfWorld3(60.36);
const percCountry23 = percentageOfWorld3(47.43);
const percCountry33 = percentageOfWorld3(83.02);
// console.log(percCountry13, percCountry23, percCountry33);

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
// console.log(describePopulation('Italy', 60.36));
// console.log(describePopulation('Spain', 47.43));
// console.log(describePopulation('Germany', 83.02));

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/
const populations = [60.36, 47.43, 83.02, 5.37];
console.log(populations);
console.log(populations.length);
console.log(populations.length === 4);
const percentages = new Array(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1]));
console.log(percentages);