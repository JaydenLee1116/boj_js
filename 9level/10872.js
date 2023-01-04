const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = Number(fs.readFileSync(path).toString().trim());

const solve = (input) => {
  if (input === 1 || input === 0) {
    return 1;
  } else {
    return input * solve(input - 1);
  }
};

console.log(solve(input));
