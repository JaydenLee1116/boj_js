const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(input); // input 모양 확인 후 주석처리하기

function solution(input) {
  // 풀이 코드 작성
}

// console.log(solution(input)); // 제출시 주석 풀기
