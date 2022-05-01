const fs = require('fs');
let num = fs.readFileSync('/dev/stdin').toString();

num = parseInt(num);

function solve(num) {
  if (num >= 90) {
    console.log('A');
  } else if (num >= 80) {
    console.log('B');
  } else if (num >= 70) {
    console.log('C');
  } else if (num >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

solve(num);
