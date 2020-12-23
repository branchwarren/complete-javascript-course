// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1978));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    value: Number(prompt('Degrees celsius:')),
  };
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
