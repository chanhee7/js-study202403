
var count = 0;
for (var i = 0; i < 3; i++) {    // 3회 반복
  for (var j = 0; j < 2; j++) {  // 2회 반복
    // count++;
    // console.log('dd' + count);     // 3 * 2 = 6회 출력
    // console.log('dd' + ++count);   // dd1 ~ dd6 까지 출력
    // console.log('dd' + count++);   // dd0 ~ dd5 까지 출력
    console.log(`${i}, ${j}`);        //
  }
  console.log('ee' + count);          // 3번 출력
}


// 구구단 2단
var level = 2; // 단수

for (var line = 1; line <= 9; line++) {
  console.log(` -> ${level} X ${line} = ${level * line}`);
}


// 구구단 2단 ~ 9단
for (var level = 2; level <= 9; level++) {
  console.log(`#구구단 ${level}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${level} X ${line} = ${level * line}`);
  }
  console.log('===================');
}



for (var x = 1; x <= 3; x++){
  console.log('ㅎㅎ');               // 3번 출력
  for (var y = 1; y <= 5; y++) {
    for (var z = 1; z <= 2; z++) {
      console.log('허허');          // 30번 출력
    }
    console.log('후후');            // 15번 출력
  }
}