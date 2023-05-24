const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  // REDO: 별 오른쪽 부분은 ' '과 같은 빈 문자열이 있는 게 아니다!!! 이런 문제를 너무 배열로 해결하려는 습관을 버려야할듯
  const N = parseInt(input[0]);
  for (let i = 1; i <= N; i++) {
    let blank = ' '.repeat(N - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(blank + stars);
  }
  for (let i = N - 1; i > 0; i--) {
    let blank = ' '.repeat(N - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(blank + stars);
  }
}
//
// TODO: 아직 다 못풀었음!
solution(input);
