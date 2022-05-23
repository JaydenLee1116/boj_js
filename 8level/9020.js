const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

function solve(input) {
  let caseCount = input.shift();

  for (let number of input) {
    let arr = [...new Array(number + 1).keys()];
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (arr[i]) {
        for (let j = i * i; j <= number; j += i) {
          arr[j] = false;
        }
      }
    }
    arr = arr.filter((x) => x >= 2);

    let a, b;

    // 이중 반복문으로 인해 시간초과

    // for (let i of arr) {
    //   for (let j of arr.filter((x) => x >= i)) {
    //     if (i + j === number) {
    //       a = i;
    //       b = j;
    //       break;
    //     }
    //   }
    // }

    // 다음과 같이 반복문 수정

    for (let i of arr) {
      let j = number - i;
      if (arr.includes(j) && i <= j) {
        a = i;
        b = j;
      }
    }

    console.log(`${a} ${b}`);
  }
}

solve(input);
