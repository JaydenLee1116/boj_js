const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(input); // input 모양 확인 후 주석 처리

const SCORE_TABLE = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0,
  P: 0,
};

function solution(input) {
  // 풀이 코드 작성
  let totalGrade = 0;
  let totalScore = 0;
  for (let i = 0; i < input.length; i++) {
    let temp = input[i].split(' ');
    if (temp[2] === 'P') continue;
    totalGrade += parseFloat(temp[1]);
    totalScore += parseFloat(temp[1]) * parseFloat(SCORE_TABLE[temp[2]]);
  }
  return totalScore / totalGrade;
}

// REDO: 분명 다 맞게 했는데, 안되넹...
console.log(solution(input).toFixed(6)); // 제출시 주석 풀기
