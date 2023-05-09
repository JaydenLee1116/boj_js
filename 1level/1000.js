// node.js의 file system 모듈 불러오기
// const fs = require('fs');
// fs 모듈의 readFileSync 함수를 통해 동기적으로 경로 내의 파일 전체를 읽어온다.
// 백준의 경우 '/dev/stdin' 경로에 테스트 케이스가 있다.
// 읽어온 정보를 toString()을 통해 문자열로 변환
// 입력받은 문자열을 split()을 통해 배열화
// const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

// A + B

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const inputData = fs.readFileSync(filePath).toString().split(' ');

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

console.log(a + b);
