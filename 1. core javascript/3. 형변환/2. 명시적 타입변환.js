
var x = '30.5', y = '40.5';

var result = Number(x) + Number(y);
// parseInt는 문자를 숫자로 바꿀때 정수로 바꾼다.(소수점 이하는 버림)
// parseDouble을 사용하면 소수점을 지킬 수 있음.
var result2 = parseInt(x) + parseInt(y);
var result3 = +x + +y;

console.log(result);
console.log(result2);
console.log(result3);

// 숫자타입이 문자타입으로 변함
var m = '' + 10 + 20;
console.log(m);

var f = '' + false;

console.log('=============');

// 'hello'를 true로 출력 -> Boolean()
console.log(Boolean('hello'));

console.log(Boolean('null'));
// 숫자999를 true로 출력 -> !!
console.log(!!999);

console.log(!!undefined);

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
