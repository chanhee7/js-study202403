
// 어떤 계산을 하는 함수
function operate(param) {
  console.log(`param: ${param}`);

  const x = param(10, 20);

  console.log('계산기 작동');
  const n1 = 10, n2 = 20;
  const result = param(n1, n2);
  return result;
}

function add(n1, n2) {
  return n1 + n2;
}

// operate 호출 -> 이름이 없는 다른 함수를 전달
const result = operate(function(n1, n2) {return n1 + n2;});

console.log(`result: ${result}`);