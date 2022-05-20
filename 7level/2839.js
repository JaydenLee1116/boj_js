const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = Number(fs.readFileSync(path).toString().trim());

function solve(input) {
  let count = 0;
  if (input === 3) {
    return 1;
  }
  if (input < 5 || input === 7) {
    return -1;
  }
  for (let i = 0; i * 3 <= input; i++) {
    if ((input - i * 3) % 5 === 0) {
      return i + (input - i * 3) / 5;
    } else {
      continue;
    }
  }
}

console.log(solve(input));
