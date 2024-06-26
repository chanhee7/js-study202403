
// 객체 생성
// 우리 집 강아지 정보 저장
var name = '뽀삐';
var kind = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산책', '간식'];
var bark = () => console.log('왈왈!');

var dog = {
  name: '뽀삐',
  kind: '진돗개',
  age: 3,
  injection: true,
  favorite: ['산책', '간식'],
  bark: () => console.log('왈왈!')
};

console.log(dog.name);
console.log(dog.favorite);

// 우리 집 고양이 정보 저장 
var cat = {
  kind: '코숏',
  favorite: ['낮잠', '간식'],
  name: '콩순이',
  age: 2,
  injection: true,
  hate: {}
};

console.log(dog.name);
console.log(cat.name);

console.log('====================');

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]); // 객체 안 배열에서 특정한 것 뽑기

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++
!dog.injection
dog.favorite.push('꼬리흔들기');
cat.favorite.splice(0, 1);

console.log('===================');

// 객체를 참조하는 두번째 방법
var key = 'name';
console.log(dog.name);
console.log(dog['name']);
// console.log(dog[name]); // undefined
console.log(dog[key]);

console.log('===================');

// 프로퍼티 수정 (기존에 있는 key로 접근)
dog.age = 4;
cat.favorite[1] = '실뭉치';

console.log(dog);
console.log(cat);

console.log('===================');

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
cat.freind = '철수';

console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);