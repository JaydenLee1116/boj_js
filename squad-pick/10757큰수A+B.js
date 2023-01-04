const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

/* 1. BigInt 사용하기

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const result = A + B;
console.log(String(result));

*/

// 2. BigInt 사용안하고 하기
// 각 문자열의 숫자 하나하나를 배열로 쪼개서 각 자리수를 더하는 방법

const maxLength = input[0].length > input[1].length ? input[0].length : input[1].length;

const strA = input[0].padStart(maxLength, '0');
const strB = input[1].padStart(maxLength, '0');

const arrA = strA.split('').map((v) => +v);
const arrB = strB.split('').map((v) => +v);
arrA.reverse();
arrB.reverse();

let answerArr = new Array(maxLength + 1).fill(0);
let carry = 0;

answerArr = answerArr.map((v, i, arr) => {
  if (i === maxLength && carry) {
    return 1;
  }
  if (i === maxLength && !carry) {
    return 0;
  }
  if (arrA[i] + arrB[i] + carry >= 10) {
    let temp = (arrA[i] + arrB[i] + carry) % 10;
    carry = 1;
    return temp;
  }
  let temp = arrA[i] + arrB[i] + carry;
  carry = 0;
  return temp;
});

answerArr[maxLength] ? null : answerArr.pop();
answerArr.reverse();

let answer = answerArr.join('');

console.log(answer);
