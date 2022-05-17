let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim().split(' ');

function solve(input) {
  let arrayReverse = ([firstReverse, secondReverse] = input.map((value) =>
    value
      .split('')
      .reverse()
      .reduce((acc, cur) => acc + cur)
  ));
  return Math.max(...arrayReverse.map((x) => Number(x)));
}

console.log(solve(input));
