const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => parseInt(x));
const count = input.shift();

const solve = (input) => {
  let arr = input;
  let sortedArr = new Array(count);
  let counting = new Array(count + 1);

  for (let i = 0; i < arr.length; i++) {
    counting[arr[i]]++;
  }

  for (let i = 1; i < arr.length; i++) {
    counting[i] += counting[i - 1];
  }

  for (let i = arr.length - 1; i > 0; i--) {
    sortedArr[counting[arr[i]]] = arr[i];
    counting[arr[i]]--;
  }

  return sortedArr;
};

console.log(solve(input));
