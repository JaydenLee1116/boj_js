const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  const count = input.length;
  for (let i = 0; i < count; i++) {
    let numbers = input[i].split(' ').map(Number);
    console.log(numbers[0] + numbers[1]);
  }
}

solve(input);

// EOF에 대해서 공부할 것
