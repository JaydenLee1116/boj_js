const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let toAscii = input.charCodeAt(0);
  console.log(toAscii);
}

solve(input);
