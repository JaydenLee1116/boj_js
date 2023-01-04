const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input.shift());

const result = input.map((v) => {
  const [a, b] = v.split(' ').map((v) => parseInt(v));
  let pow = 1;
  for (let i = 0; i < b; i++) {
    pow = (pow * a) % 10;
  }
  return pow === 0 ? 10 : pow;
});
console.log(result.join('\n'));
