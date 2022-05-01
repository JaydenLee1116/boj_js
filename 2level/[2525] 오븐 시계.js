const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let hourStart = parseInt(inputData[0].trim().split(' ')[0]);
let minStart = parseInt(inputData[0].trim().split(' ')[1]);
let minCook = parseInt(inputData[1]);

function solve(hourStart, minStart, minCook) {
  minTotal = hourStart * 60 + minStart + minCook;
  if (minTotal / 60 >= 24) {
    console.log(`${Math.floor(minTotal / 60) - 24} ${minTotal % 60}`);
  } else {
    console.log(`${Math.floor(minTotal / 60)} ${minTotal % 60}`);
  }
}

solve(hourStart, minStart, minCook);
