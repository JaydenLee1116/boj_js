const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = Number(fs.readFileSync(path).toString().trim());

let start = ['어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.']

function solve(input) {
  if (input===0) {
    return start
  } else {
    return solve(input-1) + 
  }
}
