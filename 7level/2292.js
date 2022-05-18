let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let number = Number(input);

  if (number === 1) {
    return 1;
  } else {
    number--;
    let count = 1;
    let temp = count * 6;
    while (true) {
      if (number - temp <= 0) {
        return ++count;
      } else {
        count++;
        let temp2 = count * 6;
        temp += temp2;
      }
    }
  }
}

console.log(solve(input));
