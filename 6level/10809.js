let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(path).toString().trim();

function solve(input) {
  let answerArray = new Array();

  for (i = 97; i <= 122; i++) {
    let alphabet = String.fromCharCode(i);
    if (input.includes(alphabet)) {
      for (j = 0; j < input.length; j++) {
        let str = input[j];
        if (alphabet === str) {
          answerArray.push(j);
          break;
        }
      }
    } else {
      answerArray.push(-1);
    }
  }
  return answerArray;
}

console.log(...solve(input));
