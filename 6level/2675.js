let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  let count = Number(input[0]);
  for (i = 1; i <= count; i++) {
    let repeat = Number(input[i].split(' ')[0]);
    let string = input[i].split(' ')[1];
    let answer = '';
    for (j = 0; j < string.length; j++) {
      for (k = 0; k < repeat; k++) {
        answer += string[j];
      }
    }
    console.log(answer);
  }
}

solve(input);
