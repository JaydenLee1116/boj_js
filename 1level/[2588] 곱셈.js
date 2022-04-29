const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const oneNum = B % 10;
const tenNum = Math.floor((B % 100) / 10);
const hunNum = Math.floor(B / 100);

function solve(A, B) {
  console.log(A * oneNum);
  console.log(A * tenNum);
  console.log(A * hunNum);
  console.log(A * B);
}

solve(A, B);
