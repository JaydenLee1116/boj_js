const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const result = A + B;
console.log(String(result));
