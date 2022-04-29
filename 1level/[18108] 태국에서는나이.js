const fs = require('fs');

let inputData = fs.readFileSync('/dev/stdin').toString().trim();
// 아래에서 inputData 바꾸려면 const가 아닌 let으로 정의
inputData = parseInt(inputData);

console.log(inputData - 543);
