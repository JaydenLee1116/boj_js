const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split('\n');

const count = Number(input[0]);

function solve() {
  for (i = 1; i <= count; i++) {
    let numbers = input[i].split(' ').map(Number);
    console.log(`Case #${i}: ${numbers[0] + numbers[1]}`);
  }
}

solve();
