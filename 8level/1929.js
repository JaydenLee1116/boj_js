const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((x) => Number(x));

function solve(input) {
  const M = input.shift();
  const N = input.shift();

  const arr = [...new Array(N + 1).keys()]; // 0부터 N까지 배열 생성

  for (let i = 2; i <= Math.sqrt(N); i++) {
    // 2부터 N의 제곱근까지에 대해서
    if (arr[i]) {
      // arr[i]의 값이 곧 i
      for (let j = i * i; j <= N; j += i) {
        arr[j] = false; // i=2일 때, 4부터 2의 배수들이 false가 됨, 이후 i=3일 때는 9부터(왜냐하면 앞에서 이미 이전 소수인 2에 의해 값들이 걸려졌기 때문)
      }
    }
  }

  arr.shift(); // 배열에서 0 값 제거
  arr.shift(); // 배열에서 1 값 제거

  for (let value of arr.filter((x) => x >= M)) {
    // 배열에서 M보다 큰 애들만 남게 만들기
    value ? console.log(value) : null; // value가 true일 땐 console.log(value), false일 땐 null
  }
}

solve(input);
