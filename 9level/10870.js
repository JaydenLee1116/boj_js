const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = Number(fs.readFileSync(path).toString().trim());

const solve = (input) => {
  if (input <= 1) {
    return input;
  } else {
    return solve(input - 1) + solve(input - 2);
  }
};

console.log(solve(input));
