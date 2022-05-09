const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString();

// console.log(input);

let answer = '';
function solve(number) {
  for (let i = Number(number); i >= 1; i--) {
    answer += i + '\n';
  }
}
solve(input);

console.log(answer);
