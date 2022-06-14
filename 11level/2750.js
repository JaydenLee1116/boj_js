const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((number) => parseInt(number));

const solve = (input) => {
  const count = input.shift();
  const arr = input;

  const ans = input.sort((a, b) => a - b);

  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
};

solve(input);

/* 버블 소트 구현
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((number) => parseInt(number));

const solve = (input) => {
  let count = input.shift();
  for (let i = count - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (input[j] > input[j + 1]) {
        let a = input[j];
        input[j] = input[j + 1];
        input[j + 1] = a;
      }
    }
  }

  for (let num of input) {
    console.log(num);
  }
};

solve(input);
*/
