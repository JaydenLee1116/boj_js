const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = Number(fs.readFileSync(path).toString().trim());

function solve(input) {
  if (input < 100) {
    return input;
  } else if (input <= 1000) {
    let answer = 99;
    for (let i = 100; i <= input; i++) {
      let strNumber = String(i);
      if (
        Number(strNumber[1]) ==
        (Number(strNumber[0]) + Number(strNumber[2])) / 2
      ) {
        answer += 1;
      }
    }
    return answer;
  }
}

console.log(solve(input));
