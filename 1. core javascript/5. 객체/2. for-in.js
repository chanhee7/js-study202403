
var phone = {
  company: "삼성",
  color: "펄 화이트",
  model: "갤럭시 S24 Ultra",
  price: 1200000,
};

// for - in : 값이 아닌 키가 반복됨
for (var data in phone) {
  // console.log(data);
  // console.log(phone.data);
  // console.log(typeof data);
  console.log(phone[data]);
}

console.log('=====================');
// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음
console.log('memory' in phone); // phone에 memory 있는지 확인

// phone.memory = 1;

var newKey = 'memory';
if (!(newKey in phone)) {
  phone[newKey] = '32GB';
}
console.log(phone);
