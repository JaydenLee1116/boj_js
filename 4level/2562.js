const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((x) => Number(x));

function solve(input) {
  let max = Math.max(...input);
  let indexMax = input.indexOf(max) + 1;

  console.log(max);
  console.log(indexMax);
}

solve(input);
