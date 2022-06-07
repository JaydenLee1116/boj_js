const fs = require('fs');
const { stringify } = require('querystring');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let N = parseInt(input);
  let answer = [];

  for (let i = 0; i < N; i++) {
    let sumNumbers = String(i)
      .split('')
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur);

    if (i + sumNumbers === N) {
      answer.push(i);
      break;
    }
  }
  return answer[0] ? answer[0] : 0;
}

console.log(solve(input));
