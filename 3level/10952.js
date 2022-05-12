const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split('\n');

function solve(input) {
  for (i = 0; i < input.length; i++) {
    numbers = input[i].split(' ').map(Number);
    if (numbers[0] === 0 && numbers[1] === 0) {
      break;
    }
    console.log(numbers[0] + numbers[1]);
  }
}

solve(input);
