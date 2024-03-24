
var begin=8, end=3, step=1;

var n = begin;

while (n >= end) {
  console.log(`${n}!!`);
  n -= step;
}

console.log('===============');

var n = 1;

while (n <= 9) {
console.log(`2 x ${n} =${2 * n}`);
n++;
}


// 10 ~ 34까지의 정수를 홀수만 출력
var m = 10; // begin

while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}

// 1 ~ 10 까지의 누적합
var total = 0;

var i = 1;

// i = 11, total = 55
while (i <= 10) {
  total += i;
  i++;
}
console.log(total);