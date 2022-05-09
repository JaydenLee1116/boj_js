const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString();
// console.log(input);
const number = parseInt(input);

function solve(number) {
  let total = 0;
  for (i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

console.log(solve(number));
