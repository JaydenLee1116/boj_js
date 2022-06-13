const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((number) => parseInt(number));

const solve = (input) => {
  const count = input.shift();
  const arr = input;

  const ans = input.sort((a, b) => a - b);

  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
};

solve(input);
