'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (answer === NaN || !(answer >= 0 && answer <= 3)) {
      console.log(`Your choice is not valid, try again.`);
    } else {
      this.answers[answer]++;
    }
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type.toLowerCase() === 'array') {
      console.log(this.answers);
    } else if (type.toLowerCase() === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(`The value ${type} for the 'type' parameter is not valid.`);
    }
  },
};

// const registerNewAnswer = poll.registerNewAnswer;

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = {
  answers: [5, 2, 3],
};
const testData2 = {
  answers: [1, 5, 3, 9, 6, 1],
};
poll.displayResults.call(testData1);
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});
poll.displayResults.call(testData1, 'string');
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
poll.displayResults.call(testData2);
poll.displayResults.call(testData2, 'string');
