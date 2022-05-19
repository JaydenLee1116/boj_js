const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  let caseCount = Number(input[0]);

  for (i = 1; i <= caseCount; i++) {
    let [H, W, N] = input[i].split(' ').map((x) => Number(x));
    let floor = 0;

    if (N % H === 0) {
      floor = H;
    } else {
      floor = N % H;
    }
    let ho = Math.ceil(N / H);

    if (ho < 10) {
      console.log(`${floor}0${ho}`);
    } else {
      console.log(`${floor}${ho}`);
    }
  }
}

solve(input);
