const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  const [N, M] = input[0].split(' ').map((x) => parseInt(x));
  const cardNums = input[1].split(' ').map((x) => parseInt(x));
  const answer = new Array();

  for (let i of cardNums) {
    for (let j of cardNums) {
      for (let k of cardNums) {
        if (i + j + k <= M && i !== j && j !== k && k !== i) {
          answer.push(i + j + k);
        }
      }
    }
  }
  return Math.max(...answer);
}

console.log(solve(input));
