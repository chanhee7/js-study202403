
var count = +prompt('정수: '); // 반복문 회전 수
var mark = '';
var i = 1;

while (i <= count) {
  if (i % 2 === 1) {
    mark += '+';
  } else {
    mark += '-';
  }
  i++;
}
alert(mark);