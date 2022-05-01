const fs = require('fs');
const year = fs.readFileSync('/dev/stdin').toString();

function solve(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solve(year);
