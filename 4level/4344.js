const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

function solve(input) {
  const caseCount = Number(input[0]);

  for (let i = 1; i <= caseCount; i++) {
    let arrTemp = input[i].split(' ').map((x) => Number(x));
    let studentCount = arrTemp.shift();
    let avgScore = arrTemp.reduce((acc, cur) => acc + cur) / studentCount;
    let overAvg = arrTemp.filter((score) => score > avgScore);
    let answer =
      Math.round((overAvg.length / arrTemp.length) * 100 * 1000) / 1000;

    console.log(`${answer.toFixed(3)}%`);
  }
}

solve(input);
