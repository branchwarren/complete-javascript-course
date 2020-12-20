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
// console.log(populations);
// console.log(populations.length);
// console.log(populations.length === 4);
const percentages = new Array(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1]));
// console.log(percentages);

/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.


const neighbours = ['France', 'Switzerland', 'Austria', 'Slovenia'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('‘Germany’')) {
    console.log('Probably not a central European country 😄');
}
const indexOfSwitzerland = neighbours.indexOf('Switzerland');
console.log(indexOfSwitzerland);
if (indexOfSwitzerland >= 0 && indexOfSwitzerland < neighbours.length) {
    neighbours[indexOfSwitzerland] = 'Swiss Confederation';
}
console.log(neighbours);
*/

/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/
const myCountry = {
    country: 'Italy',
    capital: 'Rome',
    language: 'Italian',
    population: 60234639,
    neighbours: ['France', 'Switzerland', 'Austria', 'Slovenia'],

    describe: function () {
        console.log(`Country is ${this.country}`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length > 0 ? false : true;
        return this.isIsland;
    }
};
// console.log(myCountry.country, myCountry.capital, myCountry.language, myCountry.population, myCountry.neighbours);


/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.

console.log(`${myCountry.country} has ${(myCountry.population / 1000000).toFixed(2)} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
*/

/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
// myCountry.describe();
// console.log(myCountry.checkIsland());

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2.length === percentages.length ? true : false);
console.log(percentages2);
