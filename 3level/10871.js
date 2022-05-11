const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split('\n');
const firstRow = input[0].split(' ').map(Number);
const secondRow = input[1].split(' ').map(Number);

const N = firstRow[0];
const X = firstRow[1];
const array = secondRow;

function solve(N, X, array) {
  console.log(...array.filter((number) => number < X));
}

solve(N, X, array);
