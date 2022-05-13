const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  const count = Number(input[0]);
  const scores = input[1].split(' ').map((x) => Number(x));

  const maxScore = Math.max(...scores);

  let average = scores.reduce((acc, cur) => acc + cur) / count;
  let newAverage = (average / maxScore) * 100;

  return newAverage;
}

console.log(solve(input));
