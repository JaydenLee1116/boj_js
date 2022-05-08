const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

const countNum = parseInt(input[0]);
for (i = 1; i <= countNum; i++) {
  let numbers = input[i].split(' ');
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}
