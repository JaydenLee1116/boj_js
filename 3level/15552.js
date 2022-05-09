const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input);

const count = parseInt(input[0]);

function solve(count) {
  let answer = '';
  for (let i = 1; i <= count; i++) {
    let numbers = input[i].split(' ').map(Number);
    answer += numbers[0] + numbers[1] + '\n';
  }
  return answer;
}

console.log(solve(count));
