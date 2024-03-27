
var scores = [83, 99, 100, 57];
var sum = 0;

// for (var i = 0; i < scores.length; i++) {
//   sum += scores[i]
// }

for (var s of scores) {
  sum += s;
}
var average = sum / scores.length;
console.log(`총점: ${sum}점, 평균: ${average}점`);

