const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = Number(fs.readFileSync(path).toString());

function solve(number) {
  for (i = 1; i <= number; i++) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
  }
}

solve(input);
