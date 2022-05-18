const FS = require('fs');
const PATH = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = FS.readFileSync(PATH).toString().trim();

function solve(input) {
  let number = Number(input);
  let acc = 1;
  let line = 1;
  let temp = 0;
  while (acc < number) {
    line++;
    temp = acc;
    acc += line;
  }

  if (line % 2 === 1) {
    return `${acc - (number - 1)}/${number - temp}`;
  } else {
    return `${number - temp}/${acc - (number - 1)}`;
  }
}

console.log(solve(input));
