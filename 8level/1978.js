const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  let count = Number(input.shift());
  let numbers = input[0].split(' ').map((x) => Number(x));

  for (let number of numbers) {
    if (number === 1) {
      count--;
    }
    for (i = 2; i <= number - 1; i++) {
      if (number % i === 0) {
        count--;
        break;
      } else {
        continue;
      }
    }
  }
  return count;
}

console.log(solve(input));
