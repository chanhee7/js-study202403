
var num = 27.5;
console.log(typeof num);
var num = 27;
console.log(typeof num);

console.log(num / 5);


var foodName = num;
console.log(foodName);

var foodName = '깐풍기';
console.log(foodName);

var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';
console.log(element);

var elem = `
<nav>
  <ul>
    <li>ㅁㄹ</li>
  </ul>
</nav>`;
console.log(elem);

console.log('===================');

var month = 6;
var day = 6;
var anni = '현충일';

var sentence = month + '월 ' + day + '일은 ' + anni + '입니다.';
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
// var sentence2 = '${month}월 ${day}일은 ${anni}입니다.'; // ''는 문자열로 나옴
console.log(sentence2);

var userAge = 30;
var flag = userAge > 19;
console.log(typeof flag); //boolean
console.log(flag); //true


// undefined: 아직 값이 없는상태 (고의로 값을 안넣은게 아님)
// null: 일부러 값을 없앤 상태 (고의로 값을 없앰)
var petName;
console.log(petName);

var myHobby = '산책';
myHobby = null;

function buyNewCar(money) {
  if (money > 2000) return '그랜져';
  else if (money > 3000) return '아반떼';
  else if (money <= 0) return null;
}

