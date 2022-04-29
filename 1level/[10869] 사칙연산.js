const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

function solve(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(parseInt(A / B)); // 정수만 출력
  console.log(A % B);
}

solve(A, B);
