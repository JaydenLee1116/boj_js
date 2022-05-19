const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .split(' ')
  .map((x) => Number(x));

function solve(input) {
  const [A, B, V] = input;

  let answer = Math.ceil((V - B) / (A - B));

  return answer;
}

console.log(solve(input));
