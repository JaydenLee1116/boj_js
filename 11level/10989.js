const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => parseInt(x));
const count = input.shift();

const solve = (input) => {
  const countingArr = new Array(10000 + 1).fill(0); // 가장 큰 숫자가 10000이기 때문에 10000을 인덱스로 갖는 카운팅 배열 생성

  input.forEach((num) => {
    countingArr[num]++;
  });

  let answer = new String();

  for (let i = 0; i < countingArr.length; i++) {
    if (countingArr[i] != 0) {
      for (let j = 0; j < countingArr[i]; j++) {
        answer += i + '\n';
      }
    }
  }
  return answer.trim();
};

console.log(solve(input));
