const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split('\n');

// console.log(count);
// const test = [1, 2, 3, 4, 5];
// console.log(Math.max(...test));

function solve(input) {
  const count = Number(input[0]);
  const array = input[1].split(' ').map((value) => Number(value));

  console.log(`${Math.min(...array)} ${Math.max(...array)}`);

  // array.sort((a, b) => a - b);
  // let min = array[0];
  // let max = array[count - 1];
  // console.log(`${min} ${max}`);
}

solve(input);
