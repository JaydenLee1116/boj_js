const fs = require('fs');
// 백준 플랫폼이 리눅스이기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input); // input 모양 확인 후 주석처리하기

function solution(input) {
  // input을 문제에 맞게 가공
  const totalPrice = parseInt(input[0]);
  const totalCount = parseInt(input[1]);
  const items = input.slice(2, 2 + totalCount);
  // 풀이 코드 작성
  const calculatedPrice = items.reduce((acc, cur) => {
    const [price, count] = cur.split(' ').map((n) => parseInt(n));
    return acc + price * count;
  }, 0);

  return totalPrice === calculatedPrice ? 'Yes' : 'No';
}

console.log(solution(input));
