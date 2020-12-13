/* 
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

const country = "Italy";
let continent = "Europe";
let population = 60234639;
// console.log("population: ", population, "population/2: ", population / 2);
// console.log("population +1: ", population + 1);
const isIsland = false;
let language = 'Italian';

finlandPopulation = 6000000;
// console.log("Italy has more inhabitants than Finland? ", population > finlandPopulation);
averagePopulation = 33000000;
// console.log("Italy has less inhabitants than the average population? ", population < averagePopulation);

const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
// console.log(description);

// console.log(`${country} is in ${continent}, and its ${population} people speak ${language}`);

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}