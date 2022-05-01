const fs = require('fs');
const inputData = fs.readFileSync(0).toString().trim().split('\n'); // 백준 문제들 중 readFileSync가 에러 나는 애들 존재

const x = parseInt(inputData[0]);
const y = parseInt(inputData[1]);

function solve(x, y) {
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
}

solve(x, y);
