const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString();

// console.log(input);

let answer = '';
function solve(number) {
  for (i = 1; i <= number; i++) {
    answer += i + '\n';
  }
  return answer.trim();
}

console.log(solve(input));
