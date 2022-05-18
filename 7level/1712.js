let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim().split(' ');

function solve(input) {
  let [fixPrice, perPrice, sellPrice] = input.map((x) => Number(x));

  if (perPrice - sellPrice >= 0) {
    return -1;
  } else {
    let count = Math.floor(fixPrice / (sellPrice - perPrice)) + 1;
    return count;
  }
}

console.log(solve(input));
