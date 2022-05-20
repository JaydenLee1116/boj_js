const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs.readFileSync(path).toString().trim().split(' ');

function solve(input) {
  let [A, B] = input.map((x) => BigInt(x));
  return String(A + B);
}

console.log(solve(input));
