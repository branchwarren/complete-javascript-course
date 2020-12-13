/* 
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

//Data 1
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

let dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log('dolphinsAverage, koalasAverage');
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins are winners!");
} else if (dolphinsAverage < koalasAverage) {
    console.log("Koalas are winners!");
} else {
    console.log("There is a draw!");
}

//Data Bonus 1
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;
const minimumScore = 100;

dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log('dolphinsAverage, koalasAverage');
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
    console.log("Dolphins are winners!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= minimumScore) {
    console.log("Koalas are winners!");
} else {
    console.log("There is a draw!");
}

//Data Bonus 2
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;

dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log('dolphinsAverage, koalasAverage');
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
    console.log("Dolphins are winners!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= minimumScore) {
    console.log("Koalas are winners!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minimumScore && koalasAverage >= minimumScore) {
    console.log("There is a draw!");
} else {
    console.log("There are not winners!");
}