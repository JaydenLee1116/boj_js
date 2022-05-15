const FS = require('fs');
const PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const INPUT = FS.readFileSync(PATH).toString().trim().split('\n');

function solve(input) {
  let count = Number(INPUT[0]);
  let numberStr = INPUT[1];

  console.log(
    numberStr
      .split('')
      .map((x) => Number(x))
      .reduce((acc, cur) => acc + cur)
  );
}

solve(INPUT);
