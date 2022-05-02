const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim();

const num = parseInt(inputData);

for (let i = 1; i <= 9; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
