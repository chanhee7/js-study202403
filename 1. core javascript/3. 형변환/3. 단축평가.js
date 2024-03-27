

true && true;   // t
true && false;  // f
false && true;  // f
false && false; // f

// AND연산 : 첫번째 falsy를 반환
console.log('ㅁㅁ' && NaN && 'ㄱㄱ');
console.log(0 && 'ㅂㅂ');


true || true;   // t
true || false;  // t
false || true;  // t
false || false; // f

// OR연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log(null || 'hi');


if (조건) {
  console.log('bbbb');
}

조건 && console.log('bbbb');

/*
  <h1>안녕하세요</h1>
  login && <h2>xxx님 환영합니다</h2>

  쿠폰 당첨여부 && sendCoupon();
  내 게시물 여부 && <button>삭제</button>

  // 같음
  !쿠폰당첨여부 && sendMessage(); 
   쿠폰당첨여부 || sendMessage();
*/