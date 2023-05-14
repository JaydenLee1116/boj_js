const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  const [basketCount, shootCount] = input[0].split(' ').map((v) => parseInt(v));
  const shootRules = input.slice(1, 1 + shootCount);

  const answer = new Array(basketCount).fill(0);
  shootRules.forEach((rule) => {
    const [start, end, num] = rule.split(' ').map((v) => parseInt(v));
    const startIndex = start - 1;
    const endIndex = end - 1;

    for (let i = startIndex; i <= endIndex; i++) {
      answer[i] = num;
    }
  });
  return answer.join(' ');
}

console.log(solution(input)); // 제출시 주석 풀기
