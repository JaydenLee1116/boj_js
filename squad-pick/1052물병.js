const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let N = +input[0];
let K = +input[1];
let answer = 0;

const getCount = (n) => {
  let count = 0;
  while (n) {
    if (n % 2) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};

while (getCount(N) > K) {
  N++;
  answer++;
}

console.log(answer);

// while ([...N.toString(2)].filter((v) => v === '1').length > K) {
//   N++;
//   count++;
// }

// while (N.toString(2).match(/1/g).length > K) {
//   N++;
//   count++;
// }
// console.log(count);

/*
const dec2bin = (decimal) => {
  const tempArr = [];
  while (decimal / 2) {
    if (decimal % 2) {
      tempArr.push(true);
    } else {
      tempArr.push(false);
    }
    decimal = (decimal - (decimal % 2)) / 2;
  }
  return tempArr;
};

let count = 0;
if (N <= K) return 0;
while (dec2bin(N).filter((v) => v).length > K) {
  N++;
  count++;
}

console.log(count);
*/
