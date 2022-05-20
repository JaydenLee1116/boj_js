// 2
// 1
// 3
// 2
// 3
// 층은 0층부터, 호수는 1호부터
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './data.txt';

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

function solve(input) {
  const caseCount = input.shift();

  for (let i = 0; i < caseCount; i++) {
    let kFloor = input.shift();
    let nHosu = input.shift() - 1; // 1호가 0번째 인덱스에 해당되게 설정
    // let apt = new Array(kFloor + 1).fill(new Array(nHosu + 1).fill(1)); 이렇게 배열을 만들면 nHosu에 대한 같은 배열에 대한 주소값이 들어간다.
    let apt = Array.from(new Array(kFloor + 1), () =>
      new Array(nHosu + 1).fill(1)
    );

    apt[0] = [...apt[0].keys()].map((x) => x + 1); // 0층을 1부터 1씩 증가하는 배열로 만들어주기

    for (let j = 1; j <= kFloor; j++) {
      for (let k = 1; k <= nHosu; k++) {
        apt[j][k] = apt[j][k - 1] + apt[j - 1][k];
      }
    }
    console.log(apt[kFloor][nHosu]);
  }
}

solve(input);
