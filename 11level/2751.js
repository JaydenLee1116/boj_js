const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => parseInt(x));

const solve = (input) => {
  const count = input.shift();

  input.sort((a, b) => a - b);

  console.log(input.join('\n'));
};

solve(input);
