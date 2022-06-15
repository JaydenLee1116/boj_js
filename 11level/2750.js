const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => parseInt(x));
const count = input.shift();

const solveBubble = (input) => {
  for (let i = input.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j + 1];
        input[j + 1] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
};

// console.log(solveBubble(input));

const solveSelect = (input) => {
  for (let i = 0; i < input.length - 1; i++) {
    let indexMin = i;
    for (let j = i; j < input.length; j++) {
      if (input[j] < input[indexMin]) {
        indexMin = j;
      }
    }
    let temp = input[i];
    input[i] = input[indexMin];
    input[indexMin] = temp;
  }
  return input;
};

// console.log(solveSelect(input));
