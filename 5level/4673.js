const NUMBER = 10000;

function solve(number) {
  let arr = new Array();

  for (i = 1; i <= number; i++) {
    let sum =
      i + [...String(i)].map((x) => Number(x)).reduce((acc, cur) => acc + cur);
    arr.push(sum);
  }

  for (i = 1; i <= number; i++) {
    if (arr.includes(i)) {
      continue;
    } else {
      console.log(i);
    }
  }
}

solve(NUMBER);
