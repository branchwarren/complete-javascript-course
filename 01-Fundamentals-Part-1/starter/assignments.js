/* 
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

const country = "Italy";
let continent = "Europe";
let population = 60234639;
console.log("population: ", population, "population/2: ", population / 2);
console.log("population +1: ", population + 1);
const isIsland = false;
let language = 'Italian';

finlandPopulation = 6000000;
console.log("Italy has more inhabitants than Finland? ", population > finlandPopulation);
averagePopulation = 33000000;
console.log("Italy has less inhabitants than the average population? ", population < averagePopulation);

const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
console.log(description);

console.log(`${country} is in ${continent}, and its ${population} people speak ${language}`);