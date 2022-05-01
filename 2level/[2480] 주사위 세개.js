const fs = require('fs');
const [firstDice, secondDice, thirdDice] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// firstDice = 3;
// secondDice = 4;
// thirdDice = 4;

function solve(firstDice, secondDice, thirdDice) {
  if (firstDice === secondDice && secondDice === thirdDice) {
    console.log(10000 + firstDice * 1000);
  } else if (firstDice === secondDice) {
    console.log(1000 + firstDice * 100);
  } else if (firstDice === thirdDice) {
    console.log(1000 + firstDice * 100);
  } else if (secondDice === thirdDice) {
    console.log(1000 + secondDice * 100);
  } else {
    console.log(Math.max(firstDice, secondDice, thirdDice) * 100);
  }
}

solve(firstDice, secondDice, thirdDice);
