const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = Number(fs.readFileSync(path).toString().trim());

const arr = new Array(input + 1);

const solve = (input) => {
  if (input === 0) {
    return 0;
  } else if (input === 1) {
    return 1;
  } else {
    return solve(input - 1) + solve(input - 2);
  }
};

console.log(solve(input));
