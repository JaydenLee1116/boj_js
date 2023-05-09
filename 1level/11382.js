const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let [A, B, C] = input[0].split(' ').map((item) => parseInt(item));

console.log(A);

function solution(A, B, C) {
  return A + B + C;
}

console.log(solution(A, B, C));
