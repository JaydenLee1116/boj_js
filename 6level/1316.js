let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  let count = Number(input[0]);
  let answer = count;
  for (let i = 1; i <= count; i++) {
    let noun = input[i];
    let left = noun[0];
    for (let j = 0; j < noun.length - 1; j++) {
      if (left.includes(noun[j + 1]) && noun[j] !== noun[j + 1]) {
        answer--;
        break;
      }
      left += noun[j + 1];
    }
  }
  return answer;
}

console.log(solve(input));
