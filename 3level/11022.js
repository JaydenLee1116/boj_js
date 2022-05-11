const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split('\n');

const count = parseInt(input[0]);
let answer = '';

function solve() {
  for (i = 1; i <= count; i++) {
    let numbers = input[i].split(' ').map(Number);
    answer +=
      `Case #${i}: ${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}` +
      '\n';
  }
}

solve();
console.log(answer);
