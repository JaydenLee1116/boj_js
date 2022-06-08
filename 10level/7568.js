const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  const count = parseInt(input.shift());
  let profile = input.map((value) => value.split(' ').map((x) => parseInt(x)));
  let answer = new Array();

  for (let i = 0; i < count; i++) {
    let temp = 0;
    for (let j = 0; j < count; j++) {
      if (profile[i][0] < profile[j][0] && profile[i][1] < profile[j][1]) {
        temp++;
      }
    }
    answer.push(temp);
  }
  return answer.map((x) => x + 1);
}

console.log(...solve(input));
