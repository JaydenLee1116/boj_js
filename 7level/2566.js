const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  const rowCount = input.length;
  const columnCount = input[0].split(' ').length;

  const rows = input.map((row) => row.split(' ').map((v) => +v));
  const maxNumber = Math.max(...rows.flat());

  console.log(maxNumber);
  for (let i = 0; i < rowCount; i++) {
    if (rows[i].includes(maxNumber)) {
      console.log(`${i + 1} ${rows[i].indexOf(maxNumber) + 1}`);
      break;
    }
  }
}

solution(input); // 제출시 주석 풀기
