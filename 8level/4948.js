const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((x) => Number(x));

function solve(input) {
  for (let number of input) {
    if (number === 0) {
      return null;
    }

    let min = number;
    let max = number * 2;

    let arr = [...new Array(max + 1).keys()];

    for (let i = 2; i <= Math.sqrt(max); i++) {
      if (arr[i]) {
        for (let j = i * i; j <= max; j += i) {
          arr[j] = false;
        }
      }
    }
    arr.shift();
    arr.shift();

    console.log(arr.filter((x) => x > min).length);
  }
}

solve(input);
