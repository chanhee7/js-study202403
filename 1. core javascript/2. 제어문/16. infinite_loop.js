
// 1 ~ 100 사이의 랜덤정수
// random() * (y - x + 1) + x

while (true) {
  var rn = Math.floor(Math.random() * 10) + 1;
  console.log('hello');
  if (rn === 7) break;
}
console.log('반복문 종료');

// 위아래 같음

for (;;) {
  var rn = Math.floor(Math.random() * 10) + 1;
  console.log('hello');
  if (rn === 7) break;
}
console.log('반복문 종료');