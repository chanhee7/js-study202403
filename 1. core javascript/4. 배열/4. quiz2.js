/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/



// var numbers = [];
// var total = 0;
// var stopAnswer = '그만'

// while(true) {
// var answer = +prompt('숫자 입력');
// numbers.push();
// while (true) {
  
//   for (var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   } 
  
//   if (answer === stopAnswer) {
//     alert(`${numbers}, ${total}`);
//     // break;
//   }
// }
// }




// 숫자들을 쌓아놓을 배열
var numbers = [];

while (numbers.length < 6) {
// 사용자에게 숫자를 입력받기
var userInput = prompt('숫자를 입력하세요.\n그만두려면 \'그만\'이라고 입력하세요!');

if (userInput === '그만') {
  break;
}
// 입력받은 숫자를 배열에 추가하기
numbers.push(+userInput);
}

// 총합 계산하기
var total = 0;
for (var n of numbers) {
  total += n;
}
alert(`입력한 숫자 목록 ${numbers}\n입력한 숫자 총합: ${total}`);