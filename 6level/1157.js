const { count } = require('console');
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let upperInput = input.toUpperCase();
  let countTotal = new Array();
  for (i = 65; i <= 90; i++) {
    let count = 0;
    if (upperInput.includes(String.fromCharCode(i))) {
      for (j = 0; j < upperInput.length; j++) {
        if (upperInput[j] === String.fromCharCode(i)) {
          count += 1;
        }
      }
    }
    countTotal.push(count);
  }
  if (countTotal.filter((value) => value === Math.max(...countTotal)).length === 1) {
    console.log(String.fromCharCode(countTotal.indexOf(Math.max(...countTotal)) + 65));
  } else {
    console.log('?');
  }
}

solve(input);

// 다른 풀이도 꼭 참고해서 정리할 것!
