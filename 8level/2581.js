const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

function solve(input) {
  let M = input.shift();
  let N = input.shift();

  let temp = new Array();

  for (i = M; i <= N; i++) {
    if (i === 1) {
      continue;
    } else {
      let count = 1;
      for (j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
          count = 0;
          break;
        } else {
          continue;
        }
      }
      if (count) {
        temp.push(i);
      }
    }
  }
  if (temp.length === 0) {
    console.log(-1);
  } else {
    console.log(temp.reduce((acc, cur) => acc + cur));
    console.log(temp[0]);
  }
}

solve(input);
