'use strict'

/* 
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('Italy', 60.36, 'Rome');
const country2 = describeCountry('Spain', 47.43, 'Madrid');
const country3 = describeCountry('Germany', 83.02, 'Berlin');
console.log(country1);
console.log(country2);
console.log(country3);
