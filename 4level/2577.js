const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((x) => Number(x));

function solve(input) {
  const multiAll = input[0] * input[1] * input[2];
  const multiString = multiAll.toString();

  for (i = 0; i <= 9; i++) {
    let count = [...multiString].filter((value) => value == i);
    console.log(count.length);
  }
}

solve(input);
