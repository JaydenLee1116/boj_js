const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석 처리

function solution(input) {
  // 풀이 코드 작성
  const [N, M] = input[0].split(' ').map((v) => parseInt(v));
  const firstMatrix = input.slice(1, Math.ceil(input.length / 2)).map((n) => n.split(' ').map((v) => parseInt(v)));
  const secondMatrix = input
    .slice(Math.ceil(input.length / 2), input.length)
    .map((n) => n.split(' ').map((v) => parseInt(v)));

  firstMatrix.forEach((row, i, arr) => {
    const anotherRow = secondMatrix[i];
    const temp = new Array(row.length).fill(0);
    const sumRow = temp.map((_, j) => row[j] + anotherRow[j]);
    console.log(sumRow.join(' '));
  });
}

solution(input); // 제출시 주석 풀기
