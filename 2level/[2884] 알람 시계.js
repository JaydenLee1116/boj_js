const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const H = parseInt(inputData[0]);
const M = parseInt(inputData[1]);

function solve(H, M) {
  if (M >= 45) {
    console.log(`${H} ${M - 45}`);
  } else if (H === 0 && M < 45) {
    console.log(`23 ${M - 45 + 60}`);
  } else if (M < 45) {
    console.log(`${H - 1} ${M - 45 + 60}`);
  }
}

solve(H, M);

// 다른 풀이
// let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

// let hour = Number(input[0]);  // Hour
// let minute = Number(input[1]);  // Minute

// minute -= 45;

// if (minute < 0) {
//     minute += 60;
//     hour--;

//     if (hour === -1) {
//         hour = 23;
//     }
// }

// console.log(hour + ' ' + minute);
