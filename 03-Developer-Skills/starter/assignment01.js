'use strict';
const printForecast = arr => {
  let output = '';
  if (
    typeof arr !== 'object' ||
    arr === null ||
    arr === undefined ||
    !(arr.length > 0)
  ) {
    output = 'No forecasted maximum temperatures provided.';
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        output += `${arr[i]}ºC in ${i + 1} days ... `;
      } else continue;
    }
    output = '...' + output;
  }
  return output;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
console.log(printForecast([]));
console.log(printForecast(null));
console.log(printForecast([20]));
console.log(printForecast([17, 'error', 23]));
