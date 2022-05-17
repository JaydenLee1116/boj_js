let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let croatia = new Array('c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=');
  for (i = 0; i < croatia.length; i++) {
    while (input.includes(croatia[i])) {
      input = input.replace(croatia[i], 1);
    }
  }
  return input.length;
}

console.log(solve(input));
