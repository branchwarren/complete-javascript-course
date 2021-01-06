'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const input = document.querySelector('textarea').value;
  console.log(input);
  const splittedInput = input?.split('\n');
  console.log(splittedInput);
  const splittedInputCamelCase = [];
  for (const word of splittedInput) {
    const tmpArray = [];
    for (const w of word.trim().split('_')) {
      tmpArray.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
    }
    const tmpWord = tmpArray.join('');
    splittedInputCamelCase.push(
      tmpWord.replace(tmpWord[0], tmpWord[0].toLowerCase()).padEnd(20, ' ')
    );
  }
  for (let i = 0; i < splittedInputCamelCase.length; i++) {
    splittedInputCamelCase[i] = splittedInputCamelCase[i].concat(
      '✅'.repeat(i + 1)
    );
  }
  console.log(splittedInputCamelCase.join('\n'));
});
