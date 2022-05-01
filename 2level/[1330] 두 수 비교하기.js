const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

function solve(A, B) {
  if (A > B) {
    console.log('>');
  } else if (A < B) {
    console.log('<');
  } else {
    console.log('==');
  }
}

solve(A, B);
