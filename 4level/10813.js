const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  const [basketCount, changeCount] = input[0].split(' ').map((v) => parseInt(v));
  const records = input.slice(1, input.length);
  const answer = new Array(basketCount).fill(0).map((_, i) => i + 1);
  for (let i = 0; i < changeCount; i++) {
    const [firstIndex, secondIndex] = records[i].split(' ').map((v) => parseInt(v) - 1);
    const temp = answer[firstIndex];
    answer[firstIndex] = answer[secondIndex];
    answer[secondIndex] = temp;
  }
  return answer.join(' ');
}

console.log(solution(input)); // 제출시 주석 풀기
