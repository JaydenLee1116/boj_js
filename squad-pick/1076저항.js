const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const RESISTANT = {
  black: { value: 0 },
  brown: { value: 1 },
  red: { value: 2 },
  orange: { value: 3 },
  yellow: { value: 4 },
  green: { value: 5 },
  blue: { value: 6 },
  violet: { value: 7 },
  grey: { value: 8 },
  white: { value: 9 },
};

const calculateColorMulti = (value) => 10 ** value;

const first = input[0];
const second = input[1];
const third = input[2];

console.log((RESISTANT[first].value * 10 + RESISTANT[second].value) * calculateColorMulti(RESISTANT[third].value));
