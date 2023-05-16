const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  const [basketCount, changeCount] = input[0].split(' ').map((v) => parseInt(v));
  const rules = input.slice(1, changeCount + 1);
  const answer = new Array(basketCount).fill(0).map((_, i) => i + 1);
  rules.forEach((rule) => {
    const startIndex = parseInt(rule.split(' ')[0]) - 1;
    const endIndex = parseInt(rule.split(' ')[1]) - 1;
    for (let i = startIndex; i <= startIndex + (endIndex - startIndex) / 2; i++) {
      const temp = answer[i];
      answer[i] = answer[endIndex - i + startIndex];
      answer[endIndex - i + startIndex] = temp;
    }
  });

  return answer;
}

console.log(solution(input).join(' ')); // 제출시 주석 풀기
