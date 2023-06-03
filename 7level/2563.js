const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  const count = parseInt(input[0]);
  const paperPositions = input.slice(1, count + 1).map((position) => position.split(' ').map((num) => parseInt(num)));
  let papersArea = count * 100;
  let papersOverlappedArea = 0;
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const [firstPaperX, firstPaperY] = paperPositions[i].map((num) => [num, num + 10]);
      const [secondPaperX, secondPaperY] = paperPositions[j].map((num) => [num, num + 10]);
      const allX = [...firstPaperX, ...secondPaperX].sort((a, b) => a - b);
      const allY = [...firstPaperY, ...secondPaperY].sort((a, b) => a - b);
      if (Math.max(...allX) - Math.min(...allX) < 20 && Math.max(...allY) - Math.min(...allY)) {
        papersOverlappedArea += (allX[2] - allX[1]) * (allY[2] - allY[1]);
      }
    }
  }
  return papersArea - papersOverlappedArea;
}

// REDO: 2장 포개어지는 것에 대해서는 ok, 여러장에 대한 로직 다시 생각해보기
console.log(solution(input)); // 제출시 주석 풀기
