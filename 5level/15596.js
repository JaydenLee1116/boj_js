const FS = require('fs');
const PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs
  .readFileSync(path)
  .toString()
  .split(' ')
  .map((x) => Number(x));

function solve(input) {
  let sumArray = input.reduce((acc, cur) => acc + cur);
  console.log(sumArray);
}

solve(input);

// 백준에 node.js 언어로 문제가 없다. (ㅠㅠ)
