let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let sum = 0;
  for (i = 0; i < input.length; i++) {
    let alphabet = input[i];
    if ('ABC'.includes(alphabet)) {
      sum += 3;
    } else if ('DEF'.includes(alphabet)) {
      sum += 4;
    } else if ('GHI'.includes(alphabet)) {
      sum += 5;
    } else if ('JKL'.includes(alphabet)) {
      sum += 6;
    } else if ('MNO'.includes(alphabet)) {
      sum += 7;
    } else if ('PQRS'.includes(alphabet)) {
      sum += 8;
    } else if ('TUV'.includes(alphabet)) {
      sum += 9;
    } else if ('WXYZ'.includes(alphabet)) {
      sum += 10;
    }
  }
  return sum;
}

console.log(solve(input));

// 너무 찝찝한 풀이
