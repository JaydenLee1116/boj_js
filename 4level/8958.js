const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  const count = Number(input[0]);

  for (i = 1; i <= count; i++) {
    let oxArray = input[i].split('');
    let score = 0;
    let acc = 0;

    for (j = 0; j < oxArray.length; j++) {
      if (oxArray[j] === 'O') {
        acc++;
        score += acc;
      } else {
        acc = 0;
      }
    }
    console.log(score);
  }
}

solve(input);
