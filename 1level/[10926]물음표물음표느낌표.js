const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().trim();
// trim() 앞뒤 공백 제거
console.log(`${inputData}??!`);
