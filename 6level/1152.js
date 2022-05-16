let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  if (input.split('').length === 0) {
    return 0;
  } else {
    let count = input.split(' ').length;
    return count;
  }
}

console.log(solve(input));

// 문자가 없는 '  '와 같은 빈칸이 들어왔을 때도 고려해야한다.
// 문제 자체가 불친절하다고 느끼지만, 실제로 현업에서는 이런 점들도 고려해야할 것 같다.
