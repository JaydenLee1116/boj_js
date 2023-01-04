const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = Number(fs.readFileSync(path).toString().trim());

// function solve(input) {
//   let number = input;
//   let numberHalf = Math.ceil(input / 2);
//   let temp = new Array();

//   if (number === 1) {
//   }

//   for (i = 2; i <= numberHalf; i++) {
//     let count = 1;
//     for (j = 2; j <= i - 1; j++) {
//       if (i % j === 0) {
//         count = 0;
//         break;
//       }
//     }

//     if (count === 1) {
//       temp.push(i);
//     }
//   }
//   let answer = new Array();
//   for (let value of temp) {
//     while (number % value === 0) {
//       number = number / value;
//       answer.push(value);
//     }
//   }

//   if (answer.length === 0 && input !== 1) {
//     console.log(input);
//   }

//   for (let ans of answer) {
//     console.log(ans);
//   }
// }

// solve(input);

function solve(input) {
  let number = input;
  let i = 2;
  let answer = new Array();
  while (true) {
    if (number % i === 0) {
      number = number / i;
      answer.push(i);
      i = 1;
    }
    i++;

    if (number === 1) {
      break;
    }
  }
  console.log(answer.join('\n'));
}

solve(input);

// 이것도 되긴 하겠다 ㅇㅁㅇ...

// function solve(input) {
//   let number = input;

//   for (i = 2; i <= input + 1; i++) {
//     while (number % i === 0) {
//       number = number / i;
//       console.log(i);
//     }
//   }
// }

// solve(input);
