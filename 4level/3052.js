const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

const inputDiv = input.map((x) => x % 42);
const answer = new Set(inputDiv);

console.log([...answer].length);

// trim() 유무에 따라 정답이 되기도 안되기도 => 이유를 모르곘다. 앞뒤 공백 제거해주나 안해주나 어차피 숫자형으로 바뀌는데..
// 해결 : trim()을 안하고 배열을 받게 되면 마지막 값으로 ''가 받아지고 이 값을 Number를 이용해 숫자로 바꾸면 0이 된다.
// 따라서 trim()은 습관적으로 해주자!
