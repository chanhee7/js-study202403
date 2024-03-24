
// var n1 = +prompt('첫번째 수');
// var n2 = +prompt('두번째 수');
// alert(`${n1} ~ ${n2}까지의 누적합: ${total}`);

// var total = n1 + n2;

// while (n1 >= 0) {
//   n1 += total
//   n1++;
// } 

// while (n2 >= 0) {
//   n2 += total
//   n2++;
// }

// x: 1, y: 10, t: 10
if (x > y) {
  var t = x;
  x = y;
  y = t;
}


var x = +prompt('첫번째 수');
var y = +prompt('두번째 수');

// x ~ y 까지의 누적합
var total = 0;

var i = x;

while (i <= y) {
  total += i;
  i++;
}
alert(`${x} ~ ${y}까지의 누적합: ${total}`);