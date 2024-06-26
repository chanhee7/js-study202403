
// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const $userInput = document.getElementById('input-number');

const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소노드
const $currentCalculation = document.getElementById('current-calculation');
// 엔트리 로그 요소노드
const $inputEntries = document.querySelector('.log-entries');

// result에 그려질 숫자
let currentResult = 0;

// log-entries에 계산 결과를 넣을 함수
function inputResult(descriptionLog) {
  const $inputResult = document.createElement('li');
  $inputResult.classList.add('.log-entries');
  $inputResult.textContent = descriptionLog;
  $inputEntries.appendChild($inputResult)
  // document.querySelector('#calc-actions').addEventListener('click', () => {
  // });
}


//============================ 함수 정의 영역 ================================//
// 게산 기능 헬퍼 함수
const caculate = (event) => {

  if (event.target.matches('#btn-add')) {
  // 더하기를 해야 함
  // 계산 전 값을 백업
  const prevResult = currentResult;
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;

  // 2. 결과에 누적
  currentResult += enteredNumber;

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} + ${enteredNumber} = ${currentResult}`;
  $currentCalculation.textContent = descriptionLog;
  inputResult(descriptionLog);
  } else if (event.target.matches('#btn-subtract')) {
    // 빼기를 해야 함
    // 계산 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야 함
    const enteredNumber = +$userInput.value;

    // 2. 결과에 누적
    currentResult -= enteredNumber;

    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} - ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    inputResult(descriptionLog);
  } else if (event.target.matches('#btn-multiply')) {

    const prevResult = currentResult;

    const enteredNumber = +$userInput.value;

    currentResult *= enteredNumber;

    $currentResult.textContent = currentResult;

    const descriptionLog = `${prevResult} * ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    inputResult(descriptionLog);
  } else if (event.target.matches('#btn-divide')) {
    const prevResult = currentResult;

    const enteredNumber = +$userInput.value;

    currentResult /= enteredNumber;

    $currentResult.textContent = currentResult;

    const descriptionLog = `${prevResult} / ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    inputResult(descriptionLog);
  }
};