
// <1번 - 값이 같은지 판단하기>
// var numA = +prompt('정수 A');
// var numB = +prompt('정수 B');
// var numC = +prompt('정수 C');

// if (numA === numB && numB === numC) {
//   alert('3개의 값이 모두 같습니다');
// } else if (numA === numB || numB === numC || numA === numC) {
//   alert('2개의 값이 같습니다.');
// } else {
//   alert('모두 다른 값입니다.')
// }


// <2번 - 정수 2개 입력후 두값의 차이 절대값으로 구하기>
// var numA = +prompt('정수 A');
// var numB = +prompt('정수 B');

// if (numA > numB) {
//   alert(`두 값의 차이는 ${numA-numB}입니다.`)
// } else {
//   alert(`두 값의 차이는 ${numB-numA}입니다.`)
// }


// <3번 - 정수 3개 입력후 최소값 구하기> 
var numA = +prompt('정수 A');
var numB = +prompt('정수 B');
var numC = +prompt('정수 C');

if (numA > numB && numC > numB) {
  alert(`최소값은 ${numB}입니다.`);
} else if (numB > numA && numC > numA) {
  alert(`최소값은 ${numA}입니다.`);
} else {
  alert(`최소값은 ${numC}입니다.`);
}