const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = Number(fs.readFileSync(path).toString());

function solve(input) {
  let firstInput = input;
  let i = 0;
  while (true) {
    let numberSum = Math.floor(input / 10) + (input % 10);
    input = (input % 10) * 10 + (numberSum % 10);
    i++;
    if (input === firstInput) {
      return i;
    }
  }
}

console.log(solve(input));
