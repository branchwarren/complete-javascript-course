/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

if (marksBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's
    BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's
    BMI (${johnBMI}) is higher than Mark's (${marksBMI})!`);
}

marksWeight = 95;
marksHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

marksBMI = marksWeight / marksHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

if (marksBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's
    BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's
    BMI (${johnBMI}) is higher than Mark's (${marksBMI})!`);
}